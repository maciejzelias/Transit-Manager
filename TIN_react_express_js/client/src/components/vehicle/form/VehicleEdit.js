import React from "react";
import { getVehicleByIdApiCall } from "../../../apiCalls/vehicleApiCalls";
import useFetchDetails from "../../../hooks/use-fetchDetails";
import { useParams } from "react-router-dom";
import VehicleForm from "./VehicleForm";
import { useTranslation } from "react-i18next";

export default function VehicleEdit() {
  const { t } = useTranslation();
  let { vehicleId } = useParams();
  vehicleId = parseInt(vehicleId);

  let content = <p> Something went wrong</p>;

  const {
    element: vehicle,
    isLoading,
    error,
  } = useFetchDetails(getVehicleByIdApiCall(vehicleId));

  if (vehicle) {
    content = <VehicleForm vehicle={vehicle} />;
  }
  if (error) {
    content = <p> {error}</p>;
  }
  if (isLoading) {
    content = <p>{t("vehicle.fetching.loadingData")}</p>;
  }

  return (
    <main>
      <h2>{t("vehicle.form.edit.pageTitle")}</h2>
      <section>{content}</section>
    </main>
  );
}
