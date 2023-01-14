import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import formMode from "../../../helpers/formHelper";

export default function DriverForm(props) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const birthdayYearRef = useRef();

  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [birthdayYearError, setBirthdayYearError] = useState(null);

  let { driverId } = useParams();
  driverId = parseInt(driverId);
  const currentFormMode = driverId ? formMode.EDIT : formMode.NEW;
  const formSubmission = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={formSubmission}>
      <label htmlFor="firstName">
        Imię:
        <span className="symbol-required">*</span>
      </label>
      <input
        className={`${firstNameError ? "error-input" : ""} `}
        ref={firstNameRef}
        defaultValue={props.driver.firstName}
        type="text"
        id="firstName"
        placeholder="2-60 znaków"
      />
      <span id="errorFirstName" className="errors-text">
        {firstNameError}
      </span>

      <label htmlFor="lastName">
        Nazwisko:
        <span className="symbol-required">*</span>
      </label>
      <input
        className={`${lastNameError ? "error-input" : ""} `}
        ref={lastNameRef}
        type="text"
        id="lastName"
        placeholder="2-60 znaków"
        defaultValue={props.driver.lastName}
      />
      <span id="errorLastName" className="errors-text">
        {lastNameError}
      </span>

      <label htmlFor="birthdayYear">
        Rok urodzenia:
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
        <input className="form-button-submit" type="submit" value="Dodaj" />
        <Link to="/drivers" className="form-button-cancel">
          Anuluj
        </Link>
      </div>
    </form>
  );
}
