import React from "react";
import useFetchList from "../../../hooks/use-fetchList";
import { Link } from "react-router-dom";

import { getDriversApiCall } from "../../../apiCalls/driverApiCalls";
import DriverListTable from "./DriverListTable";

function DriverList() {
  const { list: drivers, isLoading, error } = useFetchList(getDriversApiCall());

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
