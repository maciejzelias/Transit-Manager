import React from "react";
import { Link } from "react-router-dom";
import { getFormattedDate } from "../../../helpers/dateHelper";

export default function TransitListTableRow(props) {
  const transit = props.transitData;
  return (
    <tr>
      <td>{transit.endingLocalization}</td>
      <td>{transit.dateFrom ? getFormattedDate(transit.dateFrom) : ""}</td>
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
  );
}
