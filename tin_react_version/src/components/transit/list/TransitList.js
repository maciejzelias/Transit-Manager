import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTransitsApiCall } from "../../../apiCalls/transitApiCalls";
import TransitListTable from "./TransitListTable";

export default function TransitList() {
  const [transits, setTransits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTransits = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(getTransitsApiCall());
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      setTransits(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTransits();
  }, [fetchTransits]);

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
