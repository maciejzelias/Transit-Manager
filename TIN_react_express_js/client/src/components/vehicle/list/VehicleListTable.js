import { useTranslation } from "react-i18next";
import React from "react";
import VehicleListTableRow from "./VehicleListTableRow";

export default function VehicleListTable(props) {
  const { t } = useTranslation();
  const vehicles = props.vehicleList;
  return (
    <table className="table-list">
      <thead>
        <tr>
          <th>{t("vehicle.fields.brandName")}</th>
          <th>{t("vehicle.fields.productionYear")}</th>
          <th>{t("vehicle.fields.semitrailerSize")}</th>
          <th>{t("list.actions.title")}</th>
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
