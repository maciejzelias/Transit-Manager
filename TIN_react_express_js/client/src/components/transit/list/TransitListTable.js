import React from "react";
import TransitListTableRow from "./TransitListTableRow";
import { useTranslation } from "react-i18next";

export default function TransitListTable(props) {
  const { t } = useTranslation();
  const transits = props.transitList;
  return (
    <table className="table-list">
      <thead>
        <tr>
          <th>{t("transit.fields.endingLocalization")}</th>
          <th>{t("transit.fields.dateFrom")}</th>
          <th>{t("transit.fields.dateTo")}</th>
          <th>{t("transit.fields.driver")}</th>
          <th>{t("transit.fields.vehicle")}</th>
          <th>{t("list.actions.title")}</th>
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
