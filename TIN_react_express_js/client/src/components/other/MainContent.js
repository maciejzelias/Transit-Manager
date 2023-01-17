import React from "react";
import { useTranslation } from "react-i18next";

export default function MainContent() {
  const { t } = useTranslation();
  return (
    <main>
      <h2>{t("main-page.content")}</h2>
      <p>{t("main-page.paragraphContent")}</p>
    </main>
  );
}
