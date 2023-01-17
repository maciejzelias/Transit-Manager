import React from "react";
import { Link } from "react-router-dom";
import { getVehiclesApiCall } from "../../../apiCalls/vehicleApiCalls";
import VehicleListTable from "./VehicleListTable";
import useFetchList from "../../../hooks/use-fetchList";
import { useTranslation } from "react-i18next";

export default function VehicleList() {
  const { t } = useTranslation();
  const {
    list: vehicles,
    isLoading,
    error,
  } = useFetchList(getVehiclesApiCall());

  let content = <p> {t("vehicle.fetching.foundNoVehicles")} </p>;

  if (vehicles.length > 0) {
    content = <VehicleListTable vehicleList={vehicles} />;
  }

  if (error) {
    content = <p> {error}</p>;
  }

  if (isLoading) {
    content = <p>{t("vehicle.fetching.loadingData")}</p>;
  }

  return (
    <main>
      <h2>{t("vehicle.list.pageTitle")}</h2>
      <section>{content}</section>
      <p className="section-buttons">
        <Link to="/vehicles/add" className="button-add">
          {t("vehicle.list.addNew")}
        </Link>
      </p>
    </main>
  );
}
