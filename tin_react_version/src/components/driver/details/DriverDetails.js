import React, { useCallback, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getDriverByIdCall } from "../../../apiCalls/driverApiCalls";
import DriverDetailsData from "./DriverDetailsData";

export default function DriverDetails() {
  let { driverId } = useParams();
  driverId = parseInt(driverId);
  const [driver, setDriver] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDriver = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(getDriverByIdCall(driverId));
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      setDriver(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [driverId]);

  useEffect(() => {
    fetchDriver();
  }, [fetchDriver]);

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
