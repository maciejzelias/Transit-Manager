import React from "react";
import DriverListTableRow from "./DriverListTableRow";
import { useTranslation } from "react-i18next";

export default function DriverListTable(props) {
  const { t } = useTranslation();
  const drivers = props.driverList;
  return (
    <table className="table-list">
      <thead>
        <tr>
          <th>{t("driver.fields.firstName")}</th>
          <th>{t("driver.fields.lastName")}</th>
          <th>{t("driver.fields.birthdayYear")}</th>
          <th>{t("list.actions.title")}</th>
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
