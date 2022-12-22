import React, { Fragment } from "react";
import DriverDetailsDataRow from "./DriverDetailsDataRow";

export default function DriverDetailsData(props) {
  let content = <p> Driver has no transits performed !</p>;
  const driver = props.driverData;
  if (driver.transits.length > 0) {
    content = (
      <tbody>
        {driver.transits.map((transit) => (
          <DriverDetailsDataRow transitData={transit} key={transit._id} />
        ))}
      </tbody>
    );
  }
  return (
    <Fragment>
      <p>Imię: {driver.firstName}</p>
      <p>Nazwisko: {driver.lastName} </p>
      <p>Rok urodzenia: {driver.birthdayYear} </p>
      <h2>Szczegóły Przejazdów</h2>
      <table className="table-list">
        <thead>
          <tr>
            <th>Marka</th>
            <th>Rok Produkcji</th>
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
