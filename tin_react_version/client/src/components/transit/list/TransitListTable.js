import React from "react";
import TransitListTableRow from "./TransitListTableRow";

export default function TransitListTable(props) {
  const transits = props.transitList;
  return (
    <table className="table-list">
      <thead>
        <tr>
          <th>Do</th>
          <th>Data od</th>
          <th>Data do</th>
          <th>Kierowca</th>
          <th>Pojazd</th>
          <th>Akcje</th>
        </tr>
      </thead>
      <tbody>
        {transits.map((transit) => (
          <TransitListTableRow transitData={transit} key={transit._id} />
        ))}
      </tbody>
    </table>
  );
}
