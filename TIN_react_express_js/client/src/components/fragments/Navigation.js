import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navigation(props) {
  const { t } = useTranslation();
  const loginLogoutButton =
    props.user !== null ? (
      <div>
        <button onClick={props.onLogout} className="logout-button">
          {t("main-page.log-out")}
        </button>
        <p className="logout-text">
          {t("main-page.loggedIn")} {props.user.login}
        </p>
      </div>
    ) : (
      <button onClick={props.openLoginCard} className="login-button">
        {t("main-page.log-in")}
      </button>
    );
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
        <li className="list-item-button">{loginLogoutButton}</li>
      </ul>
    </nav>
  );
}
