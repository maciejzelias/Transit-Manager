import { useTranslation } from "react-i18next";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getVehicleByIdApiCall } from "../../../apiCalls/vehicleApiCalls";
import { isAuthenticated } from "../../../helpers/authHelper";

export default function VehicleListTableRow(props) {
  const { t } = useTranslation();
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
      {isAuthenticated() ? (
        <td>
          <ul className="list-actions">
            <li>
              <Link
                to={`/vehicles/details/${vehicle._id}`}
                className="list-actions-button-details">
                {t("list.actions.details")}
              </Link>
            </li>
            <li>
              <Link
                to={`/vehicles/edit/${vehicle._id}`}
                className="list-actions-button-edit">
                {t("list.actions.edit")}
              </Link>
            </li>
            <li>
              <button
                onClick={handleDelete}
                className="list-actions-button-delete">
                {t("list.actions.delete")}
              </button>
            </li>
          </ul>
        </td>
      ) : (
        <td>
          <p>{t("main-page.noPermission")}</p>
        </td>
      )}
    </tr>
  );
}
