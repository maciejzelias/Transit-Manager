import { checkRequired } from "./validationCommon";
import { t } from "i18next";

export const validateField = (fieldName, fieldValue) => {
  let errorMessage = "";
  if (
    (fieldName === "login" ||
    fieldName === "password") &&
    !checkRequired(fieldValue)
  ) {
    errorMessage = t("validation.nonEmpty");
  }
  return errorMessage;
};
