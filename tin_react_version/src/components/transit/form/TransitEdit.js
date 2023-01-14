import React from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../../../hooks/use-fetchDetails";
import { getTransitByIdApiCall } from "../../../apiCalls/transitApiCalls";
import TransitForm from "./TransitForm";

export default function TransitEdit() {
  let { transitId } = useParams();
  transitId = parseInt(transitId);

  let content = <p> Something went wrong</p>;

  const {
    element: transit,
    isLoading,
    error,
  } = useFetchDetails(getTransitByIdApiCall(transitId));

  if (transit) {
    content = <TransitForm transit={transit} />;
  }
  if (error) {
    content = <p> {error}</p>;
  }
  if (isLoading) {
    content = <p>Loading data...</p>;
  }

  return (
    <main>
      <h2>Edycja przejazdu</h2>
      <section>{content}</section>
    </main>
  );
}
