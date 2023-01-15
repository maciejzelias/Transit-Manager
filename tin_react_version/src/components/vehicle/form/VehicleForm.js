import React, { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import formMode from "../../../helpers/formHelper";
import { validateField } from "../../../helpers/validationVehicleForm";

export default function VehicleForm(props) {
  const brandNameRef = useRef();
  const productionYearRef = useRef();
  const semitrailerSizeRef = useRef();

  const [brandNameError, setBrandNameError] = useState(null);
  const [productionYearError, setProductionYearError] = useState(null);
  const [semitrailerSizeError, setSemitrailerSizeError] = useState(null);

  let { vehicleId } = useParams();
  vehicleId = parseInt(vehicleId);
  const currentFormMode = vehicleId ? formMode.EDIT : formMode.NEW;
  const formSubmission = (event) => {
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
  };
  return (
    <form className="form" onSubmit={formSubmission}>
      <label htmlFor="brandName">
        Marka:
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
        Rok Produkcji:
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

      <label htmlFor="semitrailerSize">Wielkosc naczepy:</label>
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
          value={currentFormMode === formMode.NEW ? "Dodaj" : "Zaktualizuj"}
        />
        <Link to="/vehicles" className="form-button-cancel">
          Anuluj
        </Link>
      </div>
    </form>
  );
}
