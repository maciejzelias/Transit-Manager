import React from "react";
import { Link, useParams } from "react-router-dom";
import { getDriverByIdApiCall } from "../../../apiCalls/driverApiCalls";
import DriverDetailsData from "./DriverDetailsData";
import useFetchDetails from "../../../hooks/use-fetchDetails";

export default function DriverDetails() {
  let { driverId } = useParams();
  driverId = parseInt(driverId);

  const {
    element: driver,
    isLoading,
    error,
  } = useFetchDetails(getDriverByIdApiCall(driverId));

  let content = <p> Couldnt fetch data of driver with id : {driverId}</p>;

  if (driver) {
    content = <DriverDetailsData driverData={driver} />;
  }

  if (error) {
    content = <p> {error}</p>;
  }
  if (isLoading) {
    content = <p>Loading data...</p>;
  }

  return (
    <main>
      <h2>Szczegóły kierowcy</h2>
      <section>{content}</section>
      <p className="section-buttons">
        <Link to="/drivers" className="form-button-cancel">
          Powrót
        </Link>
      </p>
    </main>
  );
}
