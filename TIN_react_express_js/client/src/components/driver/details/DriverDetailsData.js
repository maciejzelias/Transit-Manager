import React, { Fragment } from "react";
import DriverDetailsDataRow from "./DriverDetailsDataRow";
import { useTranslation } from "react-i18next";

export default function DriverDetailsData(props) {
  const { t } = useTranslation();
  let content = <p> {t("driver.fetching.noTransits")}</p>;
  const driver = props.driverData;
  if (driver.transits.length > 0) {
    content = (
      <tbody>
        {driver.transits.map((transit) => (
          <DriverDetailsDataRow transitData={transit} key={transit._id} />
        ))}
      </tbody>
    );
  }
  return (
    <Fragment>
      <p>
        {t("driver.fields.firstName")}: {driver.firstName}
      </p>
      <p>
        {t("driver.fields.lastName")}: {driver.lastName}{" "}
      </p>
      <p>
        {t("driver.fields.birthdayYear")}: {driver.birthdayYear}{" "}
      </p>
      <h2>{t("driver.form.transit")}</h2>
      <table className="table-list">
        <thead>
          <tr>
            <th>{t("vehicle.fields.brandName")}</th>
            <th>{t("vehicle.fields.productionYear")}</th>
            <th>{t("transit.fields.endingLocalization")}</th>
            <th>{t("transit.fields.dateFrom")}</th>
            <th>{t("transit.fields.dateTo")}</th>
          </tr>
        </thead>
        {content}
      </table>
    </Fragment>
  );
}
