import React from "react";
import VehicleForm from "./VehicleForm";
import { useTranslation } from "react-i18next";

export default function VehicleAdd() {
  const { t } = useTranslation();
  return (
    <main>
      <h2>{t("vehicle.form.add.pageTitle")}</h2>
      <VehicleForm vehicle={{}} />
    </main>
  );
}
