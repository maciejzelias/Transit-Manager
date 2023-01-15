import React from "react";
import VehicleListTableRow from "./VehicleListTableRow";

export default function VehicleListTable(props) {
  const vehicles = props.vehicleList;
  return (
    <table className="table-list">
      <thead>
        <tr>
          <th>Marka</th>
          <th>Rok produkcji</th>
          <th>Wielkośc naczepy</th>
          <th>Akcje</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map((vehicle) => (
          <VehicleListTableRow vehicleData={vehicle} key={vehicle._id} />
        ))}
      </tbody>
    </table>
  );
}
