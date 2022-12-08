import React from "react";
import { Link, useParams } from "react-router-dom";
import { getDriverByIdCall } from "../../apiCalls/driverApiCalls";
import { getFormattedDate } from "../../helpers/dateHelper";

export default function DriverDetails() {
  let { driverId } = useParams();
  driverId = parseInt(driverId);
  const driver = getDriverByIdCall(driverId);

  return (
    <main>
      <h2>Szczegóły kierowcy</h2>
      <p>Imię: {driver.firstName}</p>
      <p>Nazwisko: {driver.lastName} </p>
      <p>Rok urodzenia: {driver.birthdayYear} </p>
      <h2>Szczegóły Przejazdów</h2>
      <table className="table-list">
        <thead>
          <tr>
            <th>Marka</th>
            <th>Rok Produkcji</th>
            <th>Do</th>
            <th>Data od</th>
            <th>Data do</th>
          </tr>
        </thead>
        <tbody>
          {driver.transits.map((transit) => (
            <tr key={transit._id}>
              <td>{transit.vehicle.brandName}</td>
              <td>{transit.vehicle.productionYear}</td>
              <td>{transit.endingLocalization}</td>
              <td>
                {transit.dateFrom ? getFormattedDate(transit.dateFrom) : ""}
              </td>
              <td>{transit.dateTo ? getFormattedDate(transit.dateTo) : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="section-buttons">
        <Link to="/drivers" className="form-button-cancel">
          Powrót
        </Link>
      </div>
    </main>
  );
}
