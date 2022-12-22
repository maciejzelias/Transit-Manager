import React from "react";
import { Link } from "react-router-dom";

export default function DriverListTableRow(props) {
  const driver = props.driverData;
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
            <Link
              to={`/drivers/delete/${driver._id}`}
              className="list-actions-button-delete">
              Usuń
            </Link>
          </li>
        </ul>
      </td>
    </tr>
  );
}
