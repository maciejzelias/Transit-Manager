import {
  checkRequired,
  checkTextLengthRange,
  CheckYear,
} from "./validationCommon";
import { t } from "i18next";

export const validateField = (fieldName, fieldValue) => {
  let errorMessage = "";
  if (fieldName === "firstName" || fieldName === "lastName") {
    if (!checkRequired(fieldValue)) {
      errorMessage = t("validation.nonEmpty");
    } else if (!checkTextLengthRange(fieldValue, 2, 60)) {
      errorMessage = t("validation.len_2_60");
    }
  }
  if (fieldName === "birthdayYear") {
    if (!checkRequired(fieldValue)) {
      errorMessage = t("validation.nonEmpty");
    } else if (!CheckYear(fieldValue)) {
      errorMessage = t("validation.date_between_1900_actual");
    }
  }
  return errorMessage;
};
