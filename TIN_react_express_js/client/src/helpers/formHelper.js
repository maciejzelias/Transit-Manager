import { t } from "i18next";
const formMode = {
  NEW: "NEW",
  EDIT: "EDIT",
};

export default formMode;

export function getValidationMessage(error) {
  return t(`validation.${error}`);
}
