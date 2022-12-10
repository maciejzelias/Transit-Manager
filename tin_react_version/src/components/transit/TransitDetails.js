import React from "react";
import { Link, useParams } from "react-router-dom";
import { getTransitByIdApiCall } from "../../apiCalls/transitApiCalls";
import { getFormattedDate } from "../../helpers/dateHelper";

export default function TransitDetails() {
  let { transitId } = useParams();
  transitId = parseInt(transitId);
  const transit = getTransitByIdApiCall(transitId);

  return (
    <main>
      <h2>Szczegóły przejazdu</h2>
      <p>Z: {transit.startingLocalization}</p>
      <p>Do: {transit.endingLocalization} </p>
      <p>
        Data od: {transit.dateFrom ? getFormattedDate(transit.dateFrom) : ""}{" "}
      </p>
      <p>Data od: {transit.dateTo ? getFormattedDate(transit.dateTo) : ""} </p>
      <p>
        Kierowca: {transit.driver.firstName}
        <span> </span>
        {transit.driver.lastName}
      </p>
      <p>
        Pojazd: {transit.vehicle.brandName}
        <span> </span>
        {transit.vehicle.productionYear}
      </p>
      <div className="section-buttons">
        <Link to="/transits" className="form-button-cancel">
          Powrót
        </Link>
      </div>
    </main>
  );
}
