import React from "react";
import DriverForm from "./DriverForm";
import { useTranslation } from "react-i18next";

export default function DriverAdd() {
  const { t } = useTranslation();
  return (
    <main>
      <h2>{t("driver.form.add.pageTitle")}</h2>
      <DriverForm driver={{}} />
    </main>
  );
}
