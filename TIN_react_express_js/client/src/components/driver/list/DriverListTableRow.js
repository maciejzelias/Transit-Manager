import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDriverByIdApiCall } from "../../../apiCalls/driverApiCalls";
import { useTranslation } from "react-i18next";
import { isAuthenticated, getCurrentUser } from "../../../helpers/authHelper";

export default function DriverListTableRow(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const driver = props.driverData;

  const handleDelete = async () => {
    const user = getCurrentUser();
    let token;
    if (user && user.token) {
      token = user.token;
    }
    await fetch(getDriverByIdApiCall(driver._id), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    navigate(0);
  };
  return (
    <tr>
      <td>{driver.firstName}</td>
      <td>{driver.lastName}</td>
      <td>{driver.birthdayYear}</td>
      {isAuthenticated() ? (
        <td>
          <ul className="list-actions">
            <li>
              <Link
                to={`/drivers/details/${driver._id}`}
                className="list-actions-button-details">
                {t("list.actions.details")}
              </Link>
            </li>
            <li>
              <Link
                to={`/drivers/edit/${driver._id}`}
                className="list-actions-button-edit">
                {t("list.actions.edit")}
              </Link>
            </li>
            <li>
              <button
                className="list-actions-button-delete"
                onClick={handleDelete}>
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
