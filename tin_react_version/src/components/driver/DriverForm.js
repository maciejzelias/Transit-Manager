import React, { useState } from "react";
import formMode from "../../helpers/formHelper";
import { Link, useParams } from "react-router-dom";
import useFetchDetails from "../../hooks/use-fetchDetails";
import { getDriverByIdApiCall } from "../../apiCalls/driverApiCalls";

export default function DriverForm() {
  let { driverId } = useParams();
  driverId = parseInt(driverId);

  const currentFormMode = driverId ? formMode.EDIT : formMode.NEW;

  const {
    element: driver,
    isLoading,
    error,
  } = useFetchDetails(getDriverByIdApiCall(driverId));

  let content = <p> Couldnt fetch data of driver with id : {driverId}</p>;

  if (driver) {
    content = <DriverDetailsData driverData={driver} />;
  }

  if (error) {
    content = <p> {error}</p>;
  }

  if (isLoading) {
    content = <p>Loading data...</p>;
  }

  return (
    <main>
      <h2>Nowy Kierowca</h2>
      <form className="form">
        <label htmlFor="firstName">
          Imię:
          <abbr title="required" aria-label="required">
            *
          </abbr>
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="2-60 znaków"
          value=""
        />
        <span id="errorFirstName" className="errors-text"></span>

        <label htmlFor="lastName">
          Nazwisko:
          <abbr title="required" aria-label="required">
            *
          </abbr>
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="2-60 znaków"
          value=""
        />
        <span id="errorLastName" className="errors-text"></span>

        <label htmlFor="birthdayYear">
          Rok urodzenia:
          <abbr title="required" aria-label="required">
            *
          </abbr>
        </label>
        <input type="number" name="birthdayYear" id="birthdayYear" value="" />
        <span id="errorBirthdayYear" className="errors-text"></span>

        <div className="form-buttons">
          <p id="errorsSummary" className="errors-text"></p>
          <input className="form-button-submit" type="submit" value="Dodaj" />
          <Link to="/drivers" className="form-button-cancel">
            {" "}
            Anuluj
          </Link>
        </div>
      </form>
    </main>
  );
}
