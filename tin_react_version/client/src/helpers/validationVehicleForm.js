import {
  checkRequired,
  checkTextLengthRange,
  CheckVehicleYear,
} from "./validationCommon";

export const validateField = (fieldName, fieldValue) => {
  let errorMessage = "";
  if (fieldName === "brandName") {
    if (!checkRequired(fieldValue)) {
      errorMessage = "Pole jest wymagane";
    } else if (!checkTextLengthRange(fieldValue, 2, 60)) {
      errorMessage = "Pole powinno zawierać od 2 do 60 znaków";
    }
  }
  if (fieldName === "productionYear") {
    if (!checkRequired(fieldValue)) {
      errorMessage = "Pole jest wymagane";
    } else if (!CheckVehicleYear(fieldValue)) {
      errorMessage =
        "Pole musi zawierać rok mniejszy lub rowny do aktualnego i wiekszy niz 1950";
    }
  }
  return errorMessage;
};
