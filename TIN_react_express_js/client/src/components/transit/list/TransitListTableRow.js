import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getFormattedDate } from "../../../helpers/dateHelper";
import { getTransitByIdApiCall } from "../../../apiCalls/transitApiCalls";

export default function TransitListTableRow(props) {
  const navigate = useNavigate();
  const transit = props.transitData;

  const handleDelete = async () => {
    await fetch(getTransitByIdApiCall(transit._id), {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    navigate(0);
  };

  return (
    <tr>
      <td>{transit.endingLocalization}</td>
      <td>{getFormattedDate(transit.dateFrom)}</td>
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
            <button
              onClick={handleDelete}
              className="list-actions-button-delete">
              Usuń
            </button>
          </li>
        </ul>
      </td>
    </tr>
  );
}
