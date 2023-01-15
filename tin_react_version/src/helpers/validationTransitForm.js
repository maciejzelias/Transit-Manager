import {
  checkDate,
  checkDateIsAfter,
  checkRequired,
  checkTextLengthRange,
} from "./validationCommon";

export const validateDateTo = (dateFrom, dateTo) => {
  let errorMessage = "";
  if (checkRequired(dateTo.toString())) {
    if (!checkDate(dateTo)) {
      errorMessage = "Zły format daty";
    } else if (!checkDateIsAfter(dateTo, dateFrom)) {
      errorMessage = "Data powinna być późniejsza niz data od";
    }
  }
  return errorMessage;
};

export const validateField = (fieldName, fieldValue) => {
  let errorMessage = "";

  if (
    fieldName === "startingLocalization" ||
    fieldName === "endingLocalization"
  ) {
    if (!checkRequired(fieldValue)) {
      errorMessage = "Pole jest wymagane";
    } else if (!checkTextLengthRange(fieldValue, 2, 60)) {
      errorMessage = "Pole powinno zawierać od 2 do 60 znaków";
    }
  }
  if (fieldName === "vehicleId" || fieldName === "driverId") {
    if (!checkRequired(fieldValue)) {
      errorMessage = "Pole jest wymagane";
    }
  }

  if (fieldName === "dateFrom") {
    if (!checkRequired(fieldValue.toString())) {
      errorMessage = "Pole jest wymagane";
    } else if (!checkDate(fieldValue)) {
      errorMessage = "Zły format daty";
    }
  }

  return errorMessage;
};
