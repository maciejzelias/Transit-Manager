function validateForm() {
  const brandNameInput = document.getElementById("brandName");
  const ProductionYearInput = document.getElementById("productionYear");
  const SemitrailerSizeInput = document.getElementById("semitrailerSize");
  const RegistrationPlateInput = document.getElementById("registrationPlate");

  const errorBrandName = document.getElementById("errorBrandName");
  const errorProductionYear = document.getElementById("errorProductionYear");
  const errorSemitrailerSize = document.getElementById("errorSemitrailerSize");
  const errorRegistrationPlate = document.getElementById(
    "errorRegistrationPlate"
  );
  const errorsSummary = document.getElementById("errorsSummary");

  resetErrors(
    [
      brandNameInput,
      ProductionYearInput,
      SemitrailerSizeInput,
      RegistrationPlateInput,
    ],
    [
      errorBrandName,
      errorProductionYear,
      errorSemitrailerSize,
      errorRegistrationPlate,
    ],
    errorsSummary
  );

  let valid = true;

  if (!checkRequired(brandNameInput.value)) {
    valid = false;
    brandNameInput.classList.add("error-input");
    errorBrandName.innerText = "Pole jest wymagane";
  } else if (!checkTextLengthRange(brandNameInput.value, 2, 60)) {
    valid = false;
    brandNameInput.classList.add("error-input");
    errorBrandName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
  }

  if (!checkRequired(ProductionYearInput.value)) {
    valid = false;
    ProductionYearInput.classList.add("error-input");
    errorProductionYear.innerText = "Pole jest wymagane";
  } else if (!CheckVehicleYear(ProductionYearInput.value)) {
    valid = false;
    ProductionYearInput.classList.add("error-input");
    errorProductionYear.innerText =
      "Pole musi zawierać rok mniejszy lub rowny do aktualnego i wiekszy niz 1950";
  }

  if (!checkRequired(RegistrationPlateInput.value)) {
    valid = false;
    RegistrationPlateInput.classList.add("error-input");
    errorRegistrationPlate.innerText = "To pole jest wymagane!";
  } else if (!checkTextLengthRange(RegistrationPlateInput.value, 2, 10)) {
    valid = false;
    RegistrationPlateInput.classList.add("error-input");
    errorRegistrationPlate.innerText =
      "Pole powinno zawierac od 2 do 10 znakow";
  }

  if (!valid) {
    errorsSummary.innerText = "Formularz zawiera błędy";
  }

  return valid;
}
