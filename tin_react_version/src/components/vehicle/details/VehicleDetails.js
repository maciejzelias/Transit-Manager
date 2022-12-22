import React, { useCallback, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getVehicleByIdApiCall } from "../../../apiCalls/vehicleApiCalls";
import VehicleDetailsData from "./VehicleDetailsData";

export default function VehicleDetails() {
  let { vehicleId } = useParams();
  vehicleId = parseInt(vehicleId);
  const [vehicle, setVehicle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVehicle = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(getVehicleByIdApiCall(vehicleId));
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      setVehicle(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [vehicleId]);

  useEffect(() => {
    fetchVehicle();
  }, [fetchVehicle]);

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
