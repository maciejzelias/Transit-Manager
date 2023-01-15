import React from "react";
import { Link } from "react-router-dom";
import { getTransitsApiCall } from "../../../apiCalls/transitApiCalls";
import TransitListTable from "./TransitListTable";
import useFetchList from "../../../hooks/use-fetchList";

export default function TransitList() {
  const {
    list: transits,
    isLoading,
    error,
  } = useFetchList(getTransitsApiCall());

  let content = <p>Found no transits</p>;

  if (transits.length > 0) {
    content = <TransitListTable transitList={transits} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <main>
      <h2>Lista przejazdów</h2>
      <section>{content}</section>
      <p className="section-buttons">
        <Link to="/transits/add" className="button-add">
          Dodaj nowy przejazd
        </Link>
      </p>
    </main>
  );
}
