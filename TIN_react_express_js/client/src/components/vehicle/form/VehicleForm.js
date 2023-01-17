import React, { useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import formMode, { getValidationMessage } from "../../../helpers/formHelper";
import { validateField } from "../../../helpers/validationVehicleForm";
import {
  getVehicleByIdApiCall,
  getVehiclesApiCall,
} from "../../../apiCalls/vehicleApiCalls";
import { useTranslation } from "react-i18next";

export default function VehicleForm(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const brandNameRef = useRef();
  const productionYearRef = useRef();
  const semitrailerSizeRef = useRef();

  const [brandNameError, setBrandNameError] = useState(null);
  const [productionYearError, setProductionYearError] = useState(null);
  const [semitrailerSizeError, setSemitrailerSizeError] = useState(null);

  let { vehicleId } = useParams();
  vehicleId = parseInt(vehicleId);
  const currentFormMode = vehicleId ? formMode.EDIT : formMode.NEW;
  const formSubmission = async (event) => {
    event.preventDefault();

    const brandNameErrorMessage = validateField(
      "brandName",
      brandNameRef.current.value
    );
    const productionYearErrorMessage = validateField(
      "productionYear",
      productionYearRef.current.value
    );
    const semitrailerSizeErrorMessage = validateField(
      "semitrailerSize",
      semitrailerSizeRef.current.value
    );
    if (
      brandNameErrorMessage ||
      productionYearErrorMessage ||
      semitrailerSizeErrorMessage
    ) {
      setBrandNameError(brandNameErrorMessage);
      setProductionYearError(productionYearErrorMessage);
      setSemitrailerSizeError(semitrailerSizeErrorMessage);
      return;
    }

    let response;
    let data;

    if (currentFormMode === formMode.NEW) {
      response = await fetch(getVehiclesApiCall(), {
        method: "POST",
        body: JSON.stringify({
          brandName: brandNameRef.current.value,
          productionYear: productionYearRef.current.value,
          semitrailerSize: semitrailerSizeRef.current.value
            ? semitrailerSizeRef.current.value
            : null,
        }),
        headers: { "Content-Type": "application/json" },
      });
    } else {
      response = await fetch(getVehicleByIdApiCall(vehicleId), {
        method: "PUT",
        body: JSON.stringify({
          brandName: brandNameRef.current.value,
          productionYear: productionYearRef.current.value,
          semitrailerSize: semitrailerSizeRef.current.value
            ? semitrailerSizeRef.current.value
            : null,
        }),
        headers: { "Content-Type": "application/json" },
      });
    }
    if (
      response.status === 201 ||
      response.status === 200 ||
      response.status === 500
    ) {
      data = await response.json();

      if (!response.ok && response.status === 500) {
        const errorsArray = data.validationErrors.reverse();
        setBrandNameError(null);
        setProductionYearError(null);
        setSemitrailerSizeError(null);
        for (const index in errorsArray) {
          const errorItem = errorsArray[index];
          const errorMessage = errorItem.message;
          const fieldName = errorItem.path;
          switch (fieldName) {
            case "brandName":
              setBrandNameError(getValidationMessage(errorMessage));
              break;
            case "productionYear":
              setProductionYearError(getValidationMessage(errorMessage));
              break;
            case "semitrailerSize":
              setSemitrailerSizeError(getValidationMessage(errorMessage));
              break;
            default:
              break;
          }
        }
      } else {
        navigate("/vehicles", { replace: true });
      }
    }
  };
  return (
    <form className="form" onSubmit={formSubmission}>
      <label htmlFor="brandName">
        {t("vehicle.fields.brandName")}:
        <span className="symbol-required">*</span>
      </label>
      <input
        className={`${brandNameError ? "error-input" : ""}`}
        ref={brandNameRef}
        type="text"
        id="brandName"
        defaultValue={props.vehicle.brandName}
      />
      <span id="errorBrandName" className="errors-text">
        {brandNameError}
      </span>

      <label htmlFor="productionYear">
        {t("vehicle.fields.productionYear")}:
        <span className="symbol-required">*</span>
      </label>
      <input
        className={`${productionYearError ? "error-input" : ""}`}
        ref={productionYearRef}
        type="number"
        id="productionYear"
        defaultValue={props.vehicle.productionYear}
      />
      <span id="errorProductionYear" className="errors-text">
        {productionYearError}
      </span>

      <label htmlFor="semitrailerSize">
        {t("vehicle.fields.semitrailerSize")}:
      </label>
      <input
        className={`${semitrailerSizeError ? "error-input" : ""}`}
        ref={semitrailerSizeRef}
        type="number"
        id="semitrailerSize"
        defaultValue={props.vehicle.semitrailerSize}
      />
      <span id="errorSemitrailerSize" className="errors-text">
        {semitrailerSizeError}
      </span>

      <div className="form-buttons">
        <p id="errorsSummary" className="errors-text"></p>
        <input
          className="form-button-submit"
          type="submit"
          value={
            currentFormMode === formMode.NEW
              ? t("vehicle.form.add.btnLabel")
              : t("vehicle.form.edit.btnLabel")
          }
        />
        <Link to="/vehicles" className="form-button-cancel">
          {t("form.actions.cancel")}
        </Link>
      </div>
    </form>
  );
}
