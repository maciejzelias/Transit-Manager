import React from "react";
import { Link, useParams } from "react-router-dom";
import { getTransitByIdApiCall } from "../../../apiCalls/transitApiCalls";
import TransitDetailsData from "./TransitDetailsData";
import useFetchDetails from "../../../hooks/use-fetchDetails";
import { useTranslation } from "react-i18next";

export default function TransitDetails() {
  const { t } = useTranslation();
  let { transitId } = useParams();
  transitId = parseInt(transitId);

  const {
    element: transit,
    isLoading,
    error,
  } = useFetchDetails(getTransitByIdApiCall(transitId));

  let content = (
    <p>
      {" "}
      {t("transit.fetching.fetchDataError")} {transitId}
    </p>
  );

  if (transit) {
    content = <TransitDetailsData transitData={transit} />;
  }

  if (error) {
    content = <p> {error}</p>;
  }
  if (isLoading) {
    content = <p>{t("transit.fetching.loadingData")}</p>;
  }

  return (
    <main>
      <h2>{t("transit.form.details.pageTitle")}</h2>
      <section>{content}</section>
      <p className="section-buttons">
        <Link to="/transits" className="form-button-cancel">
          {t("form.actions.return")}
        </Link>
      </p>
    </main>
  );
}
