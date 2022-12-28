import React from "react";
import { Link, useParams } from "react-router-dom";
import { getTransitByIdApiCall } from "../../../apiCalls/transitApiCalls";
import TransitDetailsData from "./TransitDetailsData";
import useFetchDetails from '../../../hooks/use-fetchDetails'

export default function TransitDetails() {
  let { transitId } = useParams();
  transitId = parseInt(transitId);
  
  const {
    element: transit,
    isLoading,
    error,
  } = useFetchDetails(getTransitByIdApiCall(transitId));

  let content = <p> Couldnt fetch data of transit with id: {transitId}</p>;

  if (transit) {
    content = <TransitDetailsData transitData={transit} />;
  }

  if (error) {
    content = <p> {error}</p>;
  }
  if (isLoading) {
    content = <p>Loading data...</p>;
  }

  return (
    <main>
      <h2>Szczegóły przejazdu</h2>
      <section>{content}</section>
      <p className="section-buttons">
        <Link to="/transits" className="form-button-cancel">
          Powrót
        </Link>
      </p>
    </main>
  );
}
