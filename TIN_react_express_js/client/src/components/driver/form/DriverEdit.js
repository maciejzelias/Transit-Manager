import React from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../../../hooks/use-fetchDetails";
import { getDriverByIdApiCall } from "../../../apiCalls/driverApiCalls";
import DriverForm from "./DriverForm";
import { useTranslation } from "react-i18next";

export default function DriverEdit() {
  const { t } = useTranslation();
  let { driverId } = useParams();
  driverId = parseInt(driverId);

  let content = <p> Something went wrong</p>;
  const {
    element: driver,
    isLoading,
    error,
  } = useFetchDetails(getDriverByIdApiCall(driverId));

  if (driver) {
    content = <DriverForm driver={driver} />;
  }
  if (error) {
    content = <p> {error}</p>;
  }
  if (isLoading) {
    content = <p>{t("driver.fetching.loadingData")}</p>;
  }

  return (
    <main>
      <h2>{t("driver.form.edit.pageTitle")}</h2>
      <section>{content}</section>
    </main>
  );
}
