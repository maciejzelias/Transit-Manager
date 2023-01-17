import React, { Fragment } from "react";
import { getFormattedDate } from "../../../helpers/dateHelper";
import { useTranslation } from "react-i18next";

export default function TransitDetailsData(props) {
  const { t } = useTranslation();
  const transit = props.transitData;
  return (
    <Fragment>
      <p>
        {t("transit.fields.startingLocalization")}:{" "}
        {transit.startingLocalization}
      </p>
      <p>
        {t("transit.fields.endingLocalization")}: {transit.endingLocalization}{" "}
      </p>
      <p>
        {t("transit.fields.dateFrom")}:{" "}
        {transit.dateFrom ? getFormattedDate(transit.dateFrom) : ""}{" "}
      </p>
      <p>
        {t("transit.fields.dateTo")}:{" "}
        {transit.dateTo ? getFormattedDate(transit.dateTo) : ""}{" "}
      </p>
      <p>
        {t("transit.fields.driver")}: {transit.driver.firstName}
        <span> </span>
        {transit.driver.lastName}
      </p>
      <p>
        {t("transit.fields.vehicle")}: {transit.vehicle.brandName}
        <span> </span>
        {transit.vehicle.productionYear}
      </p>
    </Fragment>
  );
}
