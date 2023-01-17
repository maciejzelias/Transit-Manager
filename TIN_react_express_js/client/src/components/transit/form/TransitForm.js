import React, { useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetchList from "../../../hooks/use-fetchList";
import { getDriversApiCall } from "../../../apiCalls/driverApiCalls";
import formMode, { getValidationMessage } from "../../../helpers/formHelper";
import { getVehiclesApiCall } from "../../../apiCalls/vehicleApiCalls";
import {
  getTransitByIdApiCall,
  getTransitsApiCall,
} from "../../../apiCalls/transitApiCalls";
import { useTranslation } from "react-i18next";
import { getFormattedDate } from "../../../helpers/dateHelper";
import {
  validateDateTo,
  validateField,
} from "../../../helpers/validationTransitForm";

export default function TransitForm(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  //fetching all drivers to to select from
  const {
    list: allDrivers,
    error: getDriversError,
    isLoading: driversLoading,
  } = useFetchList(getDriversApiCall());

  //fetching all vehicles to select from
  const {
    list: allVehicles,
    error: getVehiclesError,
    isLoading: vehiclesLoading,
  } = useFetchList(getVehiclesApiCall());

  //checking whether it is add form or edit form
  let { transitId } = useParams();
  transitId = parseInt(transitId);
  const currentFormMode = transitId ? formMode.EDIT : formMode.NEW;

  //conditionally setting default value on select when it's edit form mode
  const [pickedDriver, setPickedDriver] = useState(
    currentFormMode === formMode.EDIT ? props.transit.driver._id : ""
  );
  const [pickedVehicle, setPickedVehicle] = useState(
    currentFormMode === formMode.EDIT ? props.transit.vehicle._id : ""
  );

  //Refs for inputs to get written values at submission
  const startingLocalizationRef = useRef();
  const endingLocalizationRef = useRef();
  const dateFromRef = useRef();
  const dateToRef = useRef();

  //errors
  const [startingLocalizationError, setStartingLocalizationError] =
    useState(null);
  const [endingLocalizationError, setEndingLocalizationError] = useState(null);
  const [dateFromError, setDateFromError] = useState(null);
  const [dateToError, setDateToError] = useState(null);
  const [driverError, setDriverError] = useState();
  const [vehicleError, setVehicleError] = useState(null);

  const handleChangeDriver = (event) => {
    setPickedDriver(event.target.value);
  };

  const handleChangeVehicle = (event) => {
    setPickedVehicle(event.target.value);
  };

  const formSubmission = async (event) => {
    event.preventDefault();

    //client-side validation
    const startLocErrorMessage = validateField(
      "startingLocalization",
      startingLocalizationRef.current.value
    );
    const endingLocErrorMessage = validateField(
      "endingLocalization",
      endingLocalizationRef.current.value
    );
    const driverErrorMessage = validateField("driverId", pickedDriver);
    const vehicleErrorMessage = validateField("vehicleId", pickedVehicle);
    const dateFromErrorMessage = validateField(
      "dateFrom",
      dateFromRef.current.value
    );
    const dateToErrorMessage = validateDateTo(
      dateFromRef.current.value,
      dateToRef.current.value
    );

    if (
      startLocErrorMessage ||
      endingLocErrorMessage ||
      driverErrorMessage ||
      vehicleErrorMessage ||
      dateFromErrorMessage ||
      dateToErrorMessage
    ) {
      // setStartingLocalizationError(startLocErrorMessage);
      // setEndingLocalizationError(endingLocErrorMessage);
      // setDriverError(driverErrorMessage);
      // setVehicleError(vehicleErrorMessage);
      // setDateFromError(dateFromErrorMessage);
      // setDateToError(dateToErrorMessage);
      // return;
    }

    //performing http requests

    let response;
    let data;
    if (currentFormMode === formMode.NEW) {
      response = await fetch(getTransitsApiCall(), {
        method: "POST",
        body: JSON.stringify({
          startingLocalization: startingLocalizationRef.current.value,
          endingLocalization: endingLocalizationRef.current.value,
          driverId: pickedDriver,
          vehicleId: pickedVehicle,
          dateFrom: dateFromRef.current.value,
          dateTo: dateToRef.current.value ? dateToRef.current.value : null,
        }),
        headers: { "Content-Type": "application/json" },
      });
    } else {
      response = await fetch(getTransitByIdApiCall(transitId), {
        method: "PUT",
        body: JSON.stringify({
          startingLocalization: startingLocalizationRef.current.value,
          endingLocalization: endingLocalizationRef.current.value,
          driverId: pickedDriver,
          vehicleId: pickedVehicle,
          dateFrom: dateFromRef.current.value,
          dateTo: dateToRef.current.value ? dateToRef.current.value : null,
        }),
        headers: { "Content-Type": "application/json" },
      });
    }
    if (
      response.status === 201 ||
      response.status === 200 ||
      response.status === 500
    ) {
      data = await response.json();

      if (!response.ok && response.status === 500) {
        const errorsArray = data.validationErrors.reverse();
        setStartingLocalizationError(null);
        setEndingLocalizationError(null);
        setDateFromError(null);
        setDateToError(null);
        setDriverError(null);
        setVehicleError(null);
        for (const index in errorsArray) {
          const errorItem = errorsArray[index];
          const errorMessage = errorItem.message;
          const fieldName = errorItem.path;
          switch (fieldName) {
            case "startingLocalization":
              setStartingLocalizationError(getValidationMessage(errorMessage));
              break;
            case "endingLocalization":
              setEndingLocalizationError(getValidationMessage(errorMessage));
              break;
            case "dateFrom":
              setDateFromError(getValidationMessage(errorMessage));
              break;
            case "dateTo":
              setDateToError(getValidationMessage(errorMessage));
              break;
            case "driverId":
              setDriverError(getValidationMessage(errorMessage));
              break;
            case "vehicleId":
              setVehicleError(getValidationMessage(errorMessage));
              break;
            default:
              break;
          }
        }
      } else {
        navigate("/transits", { replace: true });
      }
    }
  };

  //setting condtionally content of select if there were problems with fetching
  // drivers or vehicle data
  let driverContent = <p>Something went wrong</p>;
  let vehicleContent = <p>Something went wrong</p>;

  if (allDrivers) {
    driverContent = (
      <select
        id="driver"
        className={`${driverError ? "error-input" : ""}`}
        value={pickedDriver}
        onChange={handleChangeDriver}
        required>
        <option value="">{t("transit.form.choose.drivers")}</option>
        {allDrivers.map((driver) => (
          <option
            key={driver._id}
            value={driver._id}
            label={driver.firstName + " " + driver.lastName}></option>
        ))}
      </select>
    );
  }
  if (getDriversError) {
    driverContent = <p> {getDriversError} </p>;
  }
  if (driversLoading) {
    driverContent = <p>Loading data...</p>;
  }
  if (allVehicles) {
    vehicleContent = (
      <select
        id="vehicle"
        className={`${vehicleError ? "error-input" : ""}`}
        value={pickedVehicle}
        onChange={handleChangeVehicle}
        required>
        <option>{t("transit.form.choose.vehicles")}</option>
        {allVehicles.map((vehicle) => (
          <option
            key={vehicle._id}
            value={vehicle._id}
            label={vehicle.brandName + " " + vehicle.productionYear}></option>
        ))}
      </select>
    );
  }
  if (getVehiclesError) {
    vehicleContent = <p>{getVehiclesError}</p>;
  }
  if (vehiclesLoading) {
    vehicleContent = <p>{t("transit.fetching.loadingData")}</p>;
  }

  return (
    <form className="form" onSubmit={formSubmission}>
      <label htmlFor="startingLocalization">
        {t("transit.fields.startingLocalization")}:
        <span className="symbol-required">*</span>
      </label>
      <input
        className={`${startingLocalizationError ? "error-input" : ""}`}
        ref={startingLocalizationRef}
        type="text"
        id="startingLocalization"
        defaultValue={props.transit.startingLocalization}
      />
      <span id="errorStartingLocalization" className="errors-text">
        {startingLocalizationError}
      </span>

      <label htmlFor="endingLocalization">
        {t("transit.fields.endingLocalization")}:
        <span className="symbol-required">*</span>
      </label>
      <input
        className={`${endingLocalizationError ? "error-input" : ""}`}
        ref={endingLocalizationRef}
        type="text"
        id="endingLocalization"
        defaultValue={props.transit.endingLocalization}
      />
      <span id="errorEndingLocalization" className="errors-text">
        {endingLocalizationError}
      </span>

      <label htmlFor="dateFrom">
        {t("transit.fields.dateFrom")}:
        <span className="symbol-required">*</span>
      </label>
      <input
        className={`${dateFromError ? "error-input" : ""}`}
        ref={dateFromRef}
        type="date"
        defaultValue={getFormattedDate(props.transit.dateFrom)}
        id="dateFrom"
      />
      <span id="errorDateFrom" className="errors-text">
        {dateFromError}
      </span>

      <label htmlFor="dateTo">{t("transit.fields.dateTo")}:</label>
      <input
        className={`${dateToError ? "error-input" : ""}`}
        ref={dateToRef}
        type="date"
        defaultValue={
          props.transit.dateTo ? getFormattedDate(props.transit.dateTo) : ""
        }
        id="dateTo"
      />
      <span id="errorDateTo" className="errors-text">
        {dateToError}
      </span>

      <label htmlFor="driver">
        {t("transit.fields.driver")}:<span className="symbol-required">*</span>
      </label>
      {driverContent}
      <span id="errorDriver" className="errors-text">
        {driverError}
      </span>
      <label htmlFor="vehicle">
        {t("transit.fields.vehicle")}:<span className="symbol-required">*</span>
      </label>
      {vehicleContent}
      <span id="errorVehicle" className="errors-text">
        {vehicleError}
      </span>

      <div className="form-buttons">
        <p id="errorsSummary" className="errors-text"></p>
        <input
          className="form-button-submit"
          type="submit"
          value={
            currentFormMode === formMode.NEW
              ? t("transit.form.add.btnLabel")
              : t("transit.form.edit.btnLabel")
          }
        />
        <Link to="/transits" className="form-button-cancel">
          {t("form.actions.cancel")}
        </Link>
      </div>
    </form>
  );
}
