import React from "react";
import { Link } from "react-router-dom";

import { getDriversApiCall } from "../../apiCalls/driverApiCalls";

export default function DriverList() {
  const driverList = getDriversApiCall();
  return (
    <main>
      <h2>Lista kierowców</h2>
      <table className="table-list">
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Rok Urodzenia</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jan</td>
            <td>Kowalski</td>
            <td>1986</td>
            <td>
              <ul className="list-actions">
                <li>
                  <Link
                    to="/drivers/details/1"
                    className="list-actions-button-details">
                    Szczegóły
                  </Link>
                </li>
                <li>
                  <Link
                    to="/drivers/edit/1"
                    className="list-actions-button-edit">
                    Edytuj
                  </Link>
                </li>
                <li>
                  <Link
                    to="/drivers/delete/1"
                    className="list-actions-button-delete">
                    Usuń
                  </Link>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Adam</td>
            <td>Nowak</td>
            <td>123</td>
            <td>
              <ul className="list-actions">
                <li>
                  <Link
                    to="/drivers/details/2"
                    className="list-actions-button-details">
                    Szczegóły
                  </Link>
                </li>
                <li>
                  <Link
                    to="/drivers/edit/2"
                    className="list-actions-button-edit">
                    Edytuj
                  </Link>
                </li>
                <li>
                  <Link
                    to="/drivers/edit/2"
                    className="list-actions-button-delete">
                    Usuń
                  </Link>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="section-buttons">
        <Link to="/drivers/add" className="button-add">
          Dodaj nowego pracownika
        </Link>
      </p>
    </main>
  );
}
