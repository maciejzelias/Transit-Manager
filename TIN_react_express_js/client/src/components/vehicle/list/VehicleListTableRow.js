import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getVehicleByIdApiCall } from "../../../apiCalls/vehicleApiCalls";

export default function VehicleListTableRow(props) {
  const navigate = useNavigate();
  const vehicle = props.vehicleData;

  const handleDelete = async () => {
    await fetch(getVehicleByIdApiCall(vehicle._id), {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    navigate(0);
  };

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
