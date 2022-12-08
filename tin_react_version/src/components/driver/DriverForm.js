import React from "react";
import { Link } from "react-router-dom";

export default function DriverForm () {
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
};
