import React, { Fragment } from "react";
import VehicleDetailsDataRow from "./VehicleDetailsDataRow";

export default function VehicleDetailsData(props) {
  let content = <p> Vehicle has no transits performed !</p>;
  const vehicle = props.vehicleData;
  if (vehicle.transits.length > 0) {
    content = (
      <tbody>
        {vehicle.transits.map((transit) => (
          <VehicleDetailsDataRow transitData={transit} key={transit._id} />
        ))}
      </tbody>
    );
  }
  return (
    <Fragment>
      <p>Marka: {vehicle.brandName}</p>
      <p>Rok Produkcji: {vehicle.productionYear} </p>
      <p>Wielkośc naczepy: {vehicle.semitrailerSize} </p>
      <h2>Szczegóły Przejazdów</h2>
      <table className="table-list">
        <thead>
          <tr>
            <th>Kierowca</th>
            <th>Rok urodzenia</th>
            <th>Do</th>
            <th>Data od</th>
            <th>Data do</th>
          </tr>
        </thead>
        {content}
      </table>
    </Fragment>
  );
}
