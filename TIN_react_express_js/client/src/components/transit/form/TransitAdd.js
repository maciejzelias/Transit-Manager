import React from "react";
import TransitForm from "./TransitForm";
import { useTranslation } from "react-i18next";

export default function TransitAdd() {
  const { t } = useTranslation();
  return (
    <main>
      <h2>{t("transit.form.add.pageTitle")}</h2>
      <TransitForm transit={{}} />
    </main>
  );
}
