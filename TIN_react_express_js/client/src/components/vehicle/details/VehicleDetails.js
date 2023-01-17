import React from "react";
import { Link, useParams } from "react-router-dom";
import { getVehicleByIdApiCall } from "../../../apiCalls/vehicleApiCalls";
import VehicleDetailsData from "./VehicleDetailsData";
import useFetchDetails from "../../../hooks/use-fetchDetails";
import { useTranslation } from "react-i18next";

export default function VehicleDetails() {
  const { t } = useTranslation();
  let { vehicleId } = useParams();
  vehicleId = parseInt(vehicleId);

  const {
    element: vehicle,
    isLoading,
    error,
  } = useFetchDetails(getVehicleByIdApiCall(vehicleId));

  let content = (
    <p>
      {" "}
      {t("vehicle.fetching.fetchDataError")} {vehicleId}
    </p>
  );

  if (vehicle) {
    content = <VehicleDetailsData vehicleData={vehicle} />;
  }

  if (error) {
    content = <p> {error}</p>;
  }
  if (isLoading) {
    content = <p>{t("vehicle.fetching.loadingData")}</p>;
  }

  return (
    <main>
      <h2>{t("vehicle.form.details.pageTitle")}</h2>
      <section>{content}</section>
      <p className="section-buttons">
        <Link to="/vehicles" className="form-button-cancel">
          {t("form.actions.return")}
        </Link>
      </p>
    </main>
  );
}
