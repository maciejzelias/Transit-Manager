import {
  checkRequired,
  checkTextLengthRange,
  CheckVehicleYear,
} from "./validationCommon";
import { t } from "i18next";

export const validateField = (fieldName, fieldValue) => {
  let errorMessage = "";
  if (fieldName === "brandName") {
    if (!checkRequired(fieldValue)) {
      errorMessage = t("validation.nonEmpty");
    } else if (!checkTextLengthRange(fieldValue, 2, 60)) {
      errorMessage = t("validation.len_2_60");
    }
  }
  if (fieldName === "productionYear") {
    if (!checkRequired(fieldValue)) {
      errorMessage = t("validation.nonEmpty");
    } else if (!CheckVehicleYear(fieldValue)) {
      errorMessage = t("validation.date_before_actual");
    }
  }
  return errorMessage;
};
