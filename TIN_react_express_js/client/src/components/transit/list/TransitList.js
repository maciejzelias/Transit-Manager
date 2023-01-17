import React from "react";
import { Link } from "react-router-dom";
import { getTransitsApiCall } from "../../../apiCalls/transitApiCalls";
import TransitListTable from "./TransitListTable";
import useFetchList from "../../../hooks/use-fetchList";
import { useTranslation } from "react-i18next";

export default function TransitList() {
  const { t } = useTranslation();
  const {
    list: transits,
    isLoading,
    error,
  } = useFetchList(getTransitsApiCall());

  let content = <p>{t("transit.fetching.foundNoTransits")}</p>;

  if (transits.length > 0) {
    content = <TransitListTable transitList={transits} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>{t("transit.fetching.loadingData")}</p>;
  }

  return (
    <main>
      <h2>{t("transit.list.pageTitle")}</h2>
      <section>{content}</section>
      <p className="section-buttons">
        <Link to="/transits/add" className="button-add">
          {t("transit.list.addNew")}
        </Link>
      </p>
    </main>
  );
}
