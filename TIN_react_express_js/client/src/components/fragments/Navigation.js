import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t } = useTranslation();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">{t("nav.main-page")}</Link>
        </li>
        <li>
          <Link to="/drivers">{t("nav.drivers")}</Link>
        </li>
        <li>
          <Link to="/transits">{t("nav.transits")}</Link>
        </li>
        <li>
          <Link to="/vehicles">{t("nav.vehicles")}</Link>
        </li>
      </ul>
    </nav>
  );
}
