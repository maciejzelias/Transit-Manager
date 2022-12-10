import React from "react";
import { Link } from "react-router-dom";
import { getDriversApiCall } from "../../apiCalls/driverApiCalls";
import { getVehiclesApiCall } from "../../apiCalls/vehicleApiCalls";

export default function TransitForm() {
  const allDrivers = getDriversApiCall();
  const allVehicles = getVehiclesApiCall();

  return (
    <main>
      <h2>Nowy przejazd</h2>
      <form className="form">
        <label htmlFor="startingLocalization">
          Z:
          <abbr title="required" aria-label="required">
            *
          </abbr>
        </label>
        <input
          type="text"
          name="startingLocalization"
          id="startingLocalization"
          placeholder="2-60 znaków"
          value=""
        />
        <span id="errorStartingLocalization" className="errors-text"></span>

        <label htmlFor="endingLocalization">
          Nazwisko:
          <abbr title="required" aria-label="required">
            *
          </abbr>
        </label>
        <input
          type="text"
          name="endingLocalization"
          id="endingLocalization"
          placeholder="2-60 znaków"
          value=""
        />
        <span id="errorEndingLocalization" className="errors-text"></span>

        <label htmlFor="dateFrom">
          Data od:
          <abbr title="required" aria-label="required">
            *
          </abbr>
        </label>
        <input type="date" name="dateFrom" value="" id="dateFrom" />
        <span id="errorDateFrom" className="errors-text"></span>

        <label htmlFor="dateTo">Data do:</label>
        <input type="date" name="dateTo" value="" id="dateTo" />
        <span id="errorDateTo" className="errors-text"></span>

        <label htmlFor="driver">
          Kierowca:
          <abbr title="required" aria-label="required">
            *
          </abbr>
        </label>
        <select id="driver" name="driverId" required>
          <option value="">--- Wybierz kierowce ---</option>
          {allDrivers.map((driver) => (
            <option
              key={driver._id}
              value={driver._id}
              label={driver.firstName + " " + driver.lastName}></option>
          ))}
        </select>
        <span id="errorDriver" className="errors-text"></span>
        <label htmlFor="vehicle">
          Pojazd:
          <abbr title="required" aria-label="required">
            *
          </abbr>
        </label>
        <select id="vehicle" name="vehicleId" required>
          <option value="">--- Wybierz pojazd ---</option>
          {allVehicles.map((vehicle) => (
            <option
              key={vehicle._id}
              value={vehicle._id}
              label={vehicle.brandName + " " + vehicle.productionYear}></option>
          ))}
        </select>

        <div className="form-buttons">
          <p id="errorsSummary" className="errors-text"></p>
          <input className="form-button-submit" type="submit" value="Dodaj" />
          <Link to="/transits" className="form-button-cancel">
            Anuluj
          </Link>
        </div>
      </form>
    </main>
  );
}
