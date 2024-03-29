import React, { useRef, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import formMode, { getValidationMessage } from "../../../helpers/formHelper";
import { useTranslation } from "react-i18next";
import {
  getDriversApiCall,
  getDriverByIdApiCall,
} from "../../../apiCalls/driverApiCalls";
import { validateField } from "../../../helpers/validationDriverForm";

export default function DriverForm(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const birthdayYearRef = useRef();

  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [birthdayYearError, setBirthdayYearError] = useState(null);

  let { driverId } = useParams();
  driverId = parseInt(driverId);
  const currentFormMode = driverId ? formMode.EDIT : formMode.NEW;

  const formSubmission = async (event) => {
    event.preventDefault();

    //client-side validation
    const firstNameErrorMessage = validateField(
      "firstName",
      firstNameRef.current.value
    );
    const lastNameErrorMessage = validateField(
      "lastName",
      lastNameRef.current.value
    );
    const birthdayYearErrorMessage = validateField(
      "birthdayYear",
      birthdayYearRef.current.value
    );

    if (
      firstNameErrorMessage ||
      lastNameErrorMessage ||
      birthdayYearErrorMessage
    ) {
      setFirstNameError(firstNameErrorMessage);
      setLastNameError(lastNameErrorMessage);
      setBirthdayYearError(birthdayYearErrorMessage);
      return;
    }

    let response;
    let data;

    if (currentFormMode === formMode.NEW) {
      response = await fetch(getDriversApiCall(), {
        method: "POST",
        body: JSON.stringify({
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          birthdayYear: birthdayYearRef.current.value,
        }),
        headers: { "Content-Type": "application/json" },
      });
    } else {
      response = await fetch(getDriverByIdApiCall(driverId), {
        method: "PUT",
        body: JSON.stringify({
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          birthdayYear: birthdayYearRef.current.value,
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
      //server-side  validation
      if (!response.ok && response.status === 500) {
        const errorsArray = data.validationErrors.reverse();
        setFirstNameError(null);
        setLastNameError(null);
        setBirthdayYearError(null);
        for (const index in errorsArray) {
          const errorItem = errorsArray[index];
          const errorMessage = errorItem.message;
          const fieldName = errorItem.path;
          switch (fieldName) {
            case "firstName":
              setFirstNameError(getValidationMessage(errorMessage));
              break;
            case "lastName":
              setLastNameError(getValidationMessage(errorMessage));
              break;
            case "birthdayYear":
              setBirthdayYearError(getValidationMessage(errorMessage));
              break;
            default:
              break;
          }
        }
      } else {
        navigate("/drivers", { replace: true });
      }
    }
  };

  return (
    <form className="form" onSubmit={formSubmission}>
      <label htmlFor="firstName">
        {t("driver.fields.firstName")}:
        <span className="symbol-required">*</span>
      </label>
      <input
        className={`${firstNameError ? "error-input" : ""} `}
        ref={firstNameRef}
        defaultValue={props.driver.firstName}
        type="text"
        id="firstName"
      />
      <span id="errorFirstName" className="errors-text">
        {firstNameError}
      </span>

      <label htmlFor="lastName">
        {t("driver.fields.lastName")}:<span className="symbol-required">*</span>
      </label>
      <input
        className={`${lastNameError ? "error-input" : ""} `}
        ref={lastNameRef}
        type="text"
        id="lastName"
        defaultValue={props.driver.lastName}
      />
      <span id="errorLastName" className="errors-text">
        {lastNameError}
      </span>

      <label htmlFor="birthdayYear">
        {t("driver.fields.birthdayYear")}:
        <span className="symbol-required">*</span>
      </label>
      <input
        className={`${birthdayYearError ? "error-input" : ""} `}
        ref={birthdayYearRef}
        type="number"
        id="birthdayYear"
        defaultValue={props.driver.birthdayYear}
      />
      <span id="errorBirthdayYear" className="errors-text">
        {birthdayYearError}
      </span>

      <div className="form-buttons">
        <p id="errorsSummary" className="errors-text"></p>
        <input
          className="form-button-submit"
          type="submit"
          value={
            currentFormMode === formMode.NEW
              ? t("driver.form.add.btnLabel")
              : t("driver.form.edit.btnLabel")
          }
        />
        <Link to="/drivers" className="form-button-cancel">
          {t("form.actions.cancel")}
        </Link>
      </div>
    </form>
  );
}
