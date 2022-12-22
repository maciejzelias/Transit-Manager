import React, { useCallback, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getTransitByIdApiCall } from "../../../apiCalls/transitApiCalls";
import TransitDetailsData from "./TransitDetailsData";

export default function TransitDetails() {
  let { transitId } = useParams();
  transitId = parseInt(transitId);
  const [transit, setTransit] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTransit = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(getTransitByIdApiCall(transitId));
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      setTransit(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [transitId]);

  useEffect(() => {
    fetchTransit();
  }, [fetchTransit]);

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
