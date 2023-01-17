import React from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../../../hooks/use-fetchDetails";
import { getTransitByIdApiCall } from "../../../apiCalls/transitApiCalls";
import TransitForm from "./TransitForm";
import { useTranslation } from "react-i18next";

export default function TransitEdit() {
  const { t } = useTranslation();
  let { transitId } = useParams();
  transitId = parseInt(transitId);

  let content = <p> Something went wrong</p>;

  const {
    element: transit,
    isLoading,
    error,
  } = useFetchDetails(getTransitByIdApiCall(transitId));

  if (transit) {
    content = <TransitForm transit={transit} />;
  }
  if (error) {
    content = <p> {error}</p>;
  }
  if (isLoading) {
    content = <p>{t("transit.fetching.loadingData")}</p>;
  }

  return (
    <main>
      <h2>{t("transit.form.edit.pageTitle")}</h2>
      <section>{content}</section>
    </main>
  );
}
