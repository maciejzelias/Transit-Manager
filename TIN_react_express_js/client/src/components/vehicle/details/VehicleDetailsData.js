import React, { Fragment } from "react";
import VehicleDetailsDataRow from "./VehicleDetailsDataRow";
import { useTranslation } from "react-i18next";

export default function VehicleDetailsData(props) {
  const { t } = useTranslation();
  let content = <p> {t("vehicle.fetching.noTransits")}</p>;
  const vehicle = props.vehicleData;
  const hasTransits = vehicle.transits.length > 0;
  if (hasTransits) {
    content = (
      <tbody>
        {vehicle.transits.map((transit) => (
          <VehicleDetailsDataRow transitData={transit} key={transit._id} />
        ))}
      </tbody>
    );
  }
  return (
    <Fragment>
      <p>
        {t("vehicle.fields.brandName")}: {vehicle.brandName}
      </p>
      <p>
        {t("vehicle.fields.productionYear")}: {vehicle.productionYear}{" "}
      </p>
      <p>
        {t("vehicle.fields.semitrailerSize")}: {vehicle.semitrailerSize}{" "}
      </p>
      <h2>{t("vehicle.form.transit")}</h2>
      <table className="table-list">
        <thead>
          <tr>
            <th>{t("transit.fields.driver")}</th>
            <th>{t("driver.fields.birthdayYear")}</th>
            <th>{t("transit.fields.endingLocalization")}</th>
            <th>{t("transit.fields.dateFrom")}</th>
            <th>{t("transit.fields.dateTo")}</th>
          </tr>
        </thead>
        {hasTransits && content}
      </table>
      {!hasTransits && content}
    </Fragment>
  );
}
