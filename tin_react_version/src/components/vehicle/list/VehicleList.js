import React, { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getVehiclesApiCall } from "../../../apiCalls/vehicleApiCalls";
import VehicleListTable from "./VehicleListTable";

export default function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVehicles = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(getVehiclesApiCall());
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      setVehicles(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  let content = <p> Found no vehicles</p>;

  if (vehicles.length > 0) {
    content = <VehicleListTable vehicleList={vehicles} />;
  }

  if (error) {
    content = <p> {error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <main>
      <h2>Lista pojazdów</h2>
      <section>{content}</section>
      <p className="section-buttons">
        <Link to="/vehicles/add" className="button-add">
          Dodaj nowy pojazd
        </Link>
      </p>
    </main>
  );
}
