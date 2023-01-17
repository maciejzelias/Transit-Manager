import {
  checkDate,
  checkDateIsAfter,
  checkRequired,
  checkTextLengthRange,
} from "./validationCommon";
import { t } from "i18next";

export const validateDateTo = (dateFrom, dateTo) => {
  let errorMessage = "";
  if (checkRequired(dateTo.toString())) {
    if (!checkDate(dateTo)) {
      errorMessage = t("validation.notDate");
    } else if (!checkDateIsAfter(dateTo, dateFrom)) {
      errorMessage = t("validation.dateGreaterThan");
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
      errorMessage = t("validation.nonEmpty");
    } else if (!checkTextLengthRange(fieldValue, 2, 60)) {
      errorMessage = t("validation.len_2_60");
    }
  }
  if (fieldName === "vehicleId" || fieldName === "driverId") {
    if (!checkRequired(fieldValue)) {
      errorMessage = t("validation.nonEmpty");
    }
  }

  if (fieldName === "dateFrom") {
    if (!checkRequired(fieldValue.toString())) {
      errorMessage = t("validation.nonEmpty");
    } else if (!checkDate(fieldValue)) {
      errorMessage = t("validation.notDate");
    }
  }

  return errorMessage;
};
