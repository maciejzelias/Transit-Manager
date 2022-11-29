function validateForm() {
  const brandNameInput = document.getElementById("brandName");
  const ProductionYearInput = document.getElementById("productionYear");
  const SemitrailerSizeInput = document.getElementById("semitrailerSize");

  const errorBrandName = document.getElementById("errorBrandName");
  const errorProductionYear = document.getElementById("errorProductionYear");
  const errorSemitrailerSize = document.getElementById("errorSemitrailerSize");
  const errorsSummary = document.getElementById("errorsSummary");

  resetErrors(
    [brandNameInput, ProductionYearInput, SemitrailerSizeInput],
    [errorBrandName, errorProductionYear, errorSemitrailerSize],
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

  if (!valid) {
    errorsSummary.innerText = "Formularz zawiera błędy";
  }

  return valid;
}
