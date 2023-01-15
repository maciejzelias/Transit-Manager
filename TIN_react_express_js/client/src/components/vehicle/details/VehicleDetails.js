import React from "react";
import { Link, useParams } from "react-router-dom";
import { getVehicleByIdApiCall } from "../../../apiCalls/vehicleApiCalls";
import VehicleDetailsData from "./VehicleDetailsData";
import useFetchDetails from '../../../hooks/use-fetchDetails'

export default function VehicleDetails() {
  let { vehicleId } = useParams();
  vehicleId = parseInt(vehicleId);

  const {
    element: vehicle,
    isLoading,
    error,
  } = useFetchDetails(getVehicleByIdApiCall(vehicleId));

  let content = <p> Couldnt fetch data of vehicle with id : {vehicleId}</p>;

  if (vehicle) {
    content = <VehicleDetailsData vehicleData={vehicle} />;
  }

  if (error) {
    content = <p> {error}</p>;
  }
  if (isLoading) {
    content = <p>Loading data...</p>;
  }

  return (
    <main>
      <h2>Szczegóły pojazdu</h2>
      <section>{content}</section>
      <p className="section-buttons">
        <Link to="/vehicles" className="form-button-cancel">
          Powrót
        </Link>
      </p>
    </main>
  );
}
