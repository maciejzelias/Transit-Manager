import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchList from "../../../hooks/use-fetchList";
import { getDriversApiCall } from "../../../apiCalls/driverApiCalls";
import formMode from "../../../helpers/formHelper";
import { getVehiclesApiCall } from "../../../apiCalls/vehicleApiCalls";
import { getFormattedDate } from "../../../helpers/dateHelper";

export default function TransitForm(props) {
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

  const formSubmission = (event) => {
    event.preventDefault();
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
        <option value="">--- Wybierz kierowce ---</option>
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
        <option>--- Wybierz pojazd ---</option>
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
    vehicleContent = <p>Loading data...</p>;
  }

  return (
    <form className="form" onSubmit={formSubmission}>
      <label htmlFor="startingLocalization">
        Z:
        <span className="symbol-required">*</span>
      </label>
      <input
        className={`${startingLocalizationError ? "error-input" : ""}`}
        ref={startingLocalizationRef}
        type="text"
        id="startingLocalization"
        placeholder="2-60 znaków"
        defaultValue={props.transit.startingLocalization}
      />
      <span id="errorStartingLocalization" className="errors-text">
        {startingLocalizationError}
      </span>

      <label htmlFor="endingLocalization">
        Nazwisko:
        <span className="symbol-required">*</span>
      </label>
      <input
        className={`${endingLocalizationError ? "error-input" : ""}`}
        ref={endingLocalizationRef}
        type="text"
        id="endingLocalization"
        placeholder="2-60 znaków"
        defaultValue={props.transit.endingLocalization}
      />
      <span id="errorEndingLocalization" className="errors-text">
        {endingLocalizationError}
      </span>

      <label htmlFor="dateFrom">
        Data od:
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

      <label htmlFor="dateTo">Data do:</label>
      <input
        className={`${dateToError ? "error-input" : ""}`}
        ref={dateToRef}
        type="date"
        defaultValue={
          props.transit.dateTo ? getFormattedDate(props.transit.dateTo) : ""
        }
        id="dateTo"
      />
      <span id="errorDateTo" className="errors-text"></span>

      <label htmlFor="driver">
        Kierowca:
        <span className="symbol-required">*</span>
      </label>
      {driverContent}
      <span id="errorDriver" className="errors-text">
        {driverError}
      </span>
      <label htmlFor="vehicle">
        Pojazd:
        <span className="symbol-required">*</span>
      </label>
      {vehicleContent}
      <span id="errorVehicle" className="errors-text">
        {vehicleError}
      </span>

      <div className="form-buttons">
        <p id="errorsSummary" className="errors-text"></p>
        <input className="form-button-submit" type="submit" value="Dodaj" />
        <Link to="/transits" className="form-button-cancel">
          Anuluj
        </Link>
      </div>
    </form>
  );
}
