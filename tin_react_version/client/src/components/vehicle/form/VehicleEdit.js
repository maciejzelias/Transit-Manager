import React from "react";
import { getVehicleByIdApiCall } from "../../../apiCalls/vehicleApiCalls";
import useFetchDetails from "../../../hooks/use-fetchDetails";
import { useParams } from "react-router-dom";
import VehicleForm from "./VehicleForm";

export default function VehicleEdit() {
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
    content = <p>Loading data...</p>;
  }

  return (
    <main>
      <h2>Edycja pojazdu</h2>
      <section>{content}</section>
    </main>
  );
}
