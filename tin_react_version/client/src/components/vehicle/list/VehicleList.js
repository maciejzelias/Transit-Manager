import React from "react";
import { Link } from "react-router-dom";
import { getVehiclesApiCall } from "../../../apiCalls/vehicleApiCalls";
import VehicleListTable from "./VehicleListTable";
import useFetchList from "../../../hooks/use-fetchList";

export default function VehicleList() {
  const {
    list: vehicles,
    isLoading,
    error,
  } = useFetchList(getVehiclesApiCall());

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
