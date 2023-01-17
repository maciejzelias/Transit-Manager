import React from "react";
import { Link, useParams } from "react-router-dom";
import { getDriverByIdApiCall } from "../../../apiCalls/driverApiCalls";
import DriverDetailsData from "./DriverDetailsData";
import useFetchDetails from "../../../hooks/use-fetchDetails";
import { useTranslation } from "react-i18next";

export default function DriverDetails() {
  const { t } = useTranslation();
  let { driverId } = useParams();
  driverId = parseInt(driverId);

  const {
    element: driver,
    isLoading,
    error,
  } = useFetchDetails(getDriverByIdApiCall(driverId));

  let content = (
    <p>
      {t("driver.fetching.fetchDataError")} {driverId}
    </p>
  );

  if (driver) {
    content = <DriverDetailsData driverData={driver} />;
  }

  if (error) {
    content = <p> {error}</p>;
  }
  if (isLoading) {
    content = <p>{t("driver.fetching.loadingData")}</p>;
  }

  return (
    <main>
      <h2>{t("driver.form.details.pageTitle")}</h2>
      <section>{content}</section>
      <p className="section-buttons">
        <Link to="/drivers" className="form-button-cancel">
          {t("form.actions.return")}
        </Link>
      </p>
    </main>
  );
}
