import React from "react";
import { Link } from "react-router-dom";
import { getTransitsApiCall } from "../../apiCalls/transitApiCalls";
import { getFormattedDate } from "../../helpers/dateHelper";

export default function TransitList() {
  const transitList = getTransitsApiCall();

  return (
    <main>
      <h2>Lista przejazdów</h2>
      <table className="table-list">
        <thead>
          <tr>
            <th>Do</th>
            <th>Data od</th>
            <th>Data do</th>
            <th>Kierowca</th>
            <th>Pojazd</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {transitList.map((transit) => (
            <tr key={transit._id}>
              <td>{transit.endingLocalization}</td>
              <td>
                {transit.dateFrom ? getFormattedDate(transit.dateFrom) : ""}
              </td>
              <td>{transit.dateTo ? getFormattedDate(transit.dateTo) : ""}</td>
              <td>
                {transit.driver.firstName}
                <span> </span>
                {transit.driver.lastName}
              </td>
              <td>
                {transit.vehicle.brandName}
                <span> </span>
                {transit.vehicle.productionYear}
              </td>
              <td>
                <ul className="list-actions">
                  <li>
                    <Link
                      to={`/transits/details/${transit._id}`}
                      className="list-actions-button-details">
                      Szczegóły
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/transits/edit/${transit._id}`}
                      className="list-actions-button-edit">
                      Edytuj
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/transits/delete/${transit._id}`}
                      className="list-actions-button-delete">
                      Usuń
                    </Link>
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="section-buttons">
        <Link to="/transits/add" className="button-add">
          Dodaj nowy przejazd
        </Link>
      </p>
    </main>
  );
}
