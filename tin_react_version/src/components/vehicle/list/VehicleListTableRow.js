import React from "react";
import { Link } from "react-router-dom";

export default function VehicleListTableRow(props) {
  const vehicle = props.vehicleData;
  return (
    <tr>
      <td>{vehicle.brandName}</td>
      <td>{vehicle.productionYear}</td>
      <td>{vehicle.semitrailerSize}</td>
      <td>
        <ul className="list-actions">
          <li>
            <Link
              to={`/vehicles/details/${vehicle._id}`}
              className="list-actions-button-details">
              Szczegóły
            </Link>
          </li>
          <li>
            <Link
              to={`/vehicles/edit/${vehicle._id}`}
              className="list-actions-button-edit">
              Edytuj
            </Link>
          </li>
          <li>
            <Link
              to={`/vehicles/delete/${vehicle._id}`}
              className="list-actions-button-delete">
              Usuń
            </Link>
          </li>
        </ul>
      </td>
    </tr>
  );
}
