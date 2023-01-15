import {
  checkRequired,
  checkTextLengthRange,
  CheckYear,
} from "./validationCommon";

export const validateField = (fieldName, fieldValue) => {
  let errorMessage = "";
  if (fieldName === "firstName" || fieldName === "lastName") {
    if (!checkRequired(fieldValue)) {
      errorMessage = "Pole jest wymagane";
    } else if (!checkTextLengthRange(fieldValue, 2, 60)) {
      errorMessage = "Pole powinno zawierać od 2 do 60 znaków";
    }
  }
  if (fieldName === "birthdayYear") {
    if (!checkRequired(fieldValue)) {
      errorMessage = "Pole jest wymagane";
    } else if (!CheckYear(fieldValue)) {
      errorMessage = "Pole powinno zawierać rok mniejszy niz aktualny";
    }
  }
  return errorMessage;
};
