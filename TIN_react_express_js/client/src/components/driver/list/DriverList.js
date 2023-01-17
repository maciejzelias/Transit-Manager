import React from "react";
import useFetchList from "../../../hooks/use-fetchList";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getDriversApiCall } from "../../../apiCalls/driverApiCalls";
import DriverListTable from "./DriverListTable";

function DriverList() {
  const { t } = useTranslation();
  const { list: drivers, isLoading, error } = useFetchList(getDriversApiCall());

  let content = <p> {t("driver.fetching.foundNoDrivers")}</p>;

  if (drivers.length > 0) {
    content = <DriverListTable driverList={drivers} />;
  }

  if (error) {
    content = <p> {error}</p>;
  }

  if (isLoading) {
    content = <p>{t("driver.fetching.loadingData")}</p>;
  }

  return (
    <main>
      <h2>{t("driver.list.pageTitle")}</h2>
      <section>{content}</section>
      <p className="section-buttons">
        <Link to="/drivers/add" className="button-add">
          {t("driver.list.addNew")}
        </Link>
      </p>
    </main>
  );
}

export default DriverList;
