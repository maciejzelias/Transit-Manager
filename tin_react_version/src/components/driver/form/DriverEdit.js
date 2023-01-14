import React from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../../../hooks/use-fetchDetails";
import { getDriverByIdApiCall } from "../../../apiCalls/driverApiCalls";
import DriverForm from "./DriverForm";

export default function DriverEdit() {
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
    content = <p>Loading data...</p>;
  }

  return (
    <main>
      <h2>Edycja kierowcy</h2>
      <section>{content}</section>
    </main>
  );
}
