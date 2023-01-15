import React from "react";
import { getFormattedDate } from "../../../helpers/dateHelper";

export default function VehicleDetailsDataRow(props) {
  const transit = props.transitData;
  return (
    <tr>
      <td>{transit.driver.firstName} {transit.driver.lastName}</td>
      <td>{transit.driver.birthdayYear}</td>
      <td>{transit.endingLocalization}</td>
      <td>{transit.dateFrom ? getFormattedDate(transit.dateFrom) : ""}</td>
      <td>{transit.dateTo ? getFormattedDate(transit.dateTo) : ""}</td>
    </tr>
  );
}
