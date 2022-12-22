import React, { Fragment } from "react";
import { getFormattedDate } from "../../../helpers/dateHelper";

export default function TransitDetailsData(props) {
  const transit = props.transitData;
  return (
    <Fragment>
      <p>Z: {transit.startingLocalization}</p>
      <p>Do: {transit.endingLocalization} </p>
      <p>
        Data od: {transit.dateFrom ? getFormattedDate(transit.dateFrom) : ""}{" "}
      </p>
      <p>Data od: {transit.dateTo ? getFormattedDate(transit.dateTo) : ""} </p>
      {/* <p>
        Kierowca: {transit.driver.firstName}
        <span> </span>
        {transit.driver.lastName}
      </p>
      <p>
        Pojazd: {transit.vehicle.brandName}
        <span> </span>
        {transit.vehicle.productionYear}
      </p> */}
    </Fragment>
  );
}
