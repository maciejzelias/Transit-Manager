import React from "react";
import DriverListTableRow from "./DriverListTableRow";

export default function DriverListTable(props) {
  const drivers = props.driverList;
  return (
    <table className="table-list">
      <thead>
        <tr>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Rok Urodzenia</th>
          <th>Akcje</th>
        </tr>
      </thead>
      <tbody>
        {drivers.map((driver) => (
          <DriverListTableRow driverData={driver} key={driver._id} />
        ))}
      </tbody>
    </table>
  );
}
