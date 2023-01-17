import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getFormattedDate } from "../../../helpers/dateHelper";
import { getTransitByIdApiCall } from "../../../apiCalls/transitApiCalls";
import { useTranslation } from "react-i18next";

export default function TransitListTableRow(props) {
  const { t } = useTranslation();
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
              {t("list.actions.details")}
            </Link>
          </li>
          <li>
            <Link
              to={`/transits/edit/${transit._id}`}
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
    </tr>
  );
}
