import React, { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getDriversApiUrl } from "../../../apiCalls/driverApiCalls";
import DriverListTable from "./DriverListTable";

function DriverList() {
  const [drivers, setDrivers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDrivers = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(getDriversApiUrl());
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      setDrivers(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDrivers();
  }, [fetchDrivers]);

  let content = <p> Found no drivers</p>;

  if (drivers.length > 0) {
    content = <DriverListTable driverList={drivers} />;
  }

  if (error) {
    content = <p> {error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <main>
      <h2>Lista kierowców</h2>
      <section>{content}</section>
      <p className="section-buttons">
        <Link to="/drivers/add" className="button-add">
          Dodaj nowego pracownika
        </Link>
      </p>
    </main>
  );
}

export default DriverList;
