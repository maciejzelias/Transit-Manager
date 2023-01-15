import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDriverByIdApiCall } from "../../../apiCalls/driverApiCalls";

export default function DriverListTableRow(props) {
  const navigate = useNavigate();
  const driver = props.driverData;

  const handleDelete = async () => {
    await fetch(getDriverByIdApiCall(driver._id), {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    navigate(0);
  };
  return (
    <tr>
      <td>{driver.firstName}</td>
      <td>{driver.lastName}</td>
      <td>{driver.birthdayYear}</td>
      <td>
        <ul className="list-actions">
          <li>
            <Link
              to={`/drivers/details/${driver._id}`}
              className="list-actions-button-details">
              Szczegóły
            </Link>
          </li>
          <li>
            <Link
              to={`/drivers/edit/${driver._id}`}
              className="list-actions-button-edit">
              Edytuj
            </Link>
          </li>
          <li>
            <button
              className="list-actions-button-delete"
              onClick={handleDelete}>
              Usuń
            </button>
          </li>
        </ul>
      </td>
    </tr>
  );
}
