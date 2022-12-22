import React from "react";
import { getFormattedDate } from "../../../helpers/dateHelper";

export default function DriverDetailsDataRow(props) {
  const transit = props.transitData;
  return (
    <tr>
      <td>{transit.vehicle.brandName}</td>
      <td>{transit.vehicle.productionYear}</td>
      <td>{transit.endingLocalization}</td>
      <td>{transit.dateFrom ? getFormattedDate(transit.dateFrom) : ""}</td>
      <td>{transit.dateTo ? getFormattedDate(transit.dateTo) : ""}</td>
    </tr>
  );
}
