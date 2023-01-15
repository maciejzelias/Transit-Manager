function resetErrors(inputs, errorsTexts, errorInfo) {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("error-input");
  }

  for (let i = 0; i < errorsTexts.length; i++) {
    errorsTexts[i].innerText = "";
  }
  errorInfo.innerText = "";
}

function checkRequired(value) {
  if (!value) {
    return false;
  }
  value = value.toString().trim();

  return value !== "";
}

function checkRange(value, min, max) {
  if (!value) {
    return false;
  }
  if (value < min || value > max) {
    return false;
  }
  return true;
}

function checkTextLengthRange(value, min, max) {
  if (!value) {
    return false;
  }
  const length = value.toString().trim().length;
  if (max && length > max) {
    return false;
  }
  if (min && length < min) {
    return false;
  }
  return true;
}

function CheckYear(value) {
  if (!value) return false;
  value = value.toString().trim();
  const date = new Date();
  const currYear = date.getFullYear();
  if (value > currYear) {
    return false;
  }
  return true;
}

function CheckVehicleYear(value) {
  if (!value) return false;
  value = value.toString().trim();
  const date = new Date();
  const currYear = date.getFullYear();
  if (value > currYear) {
    return false;
  }
  if (value < 1950) {
    return false;
  }

  return true;
}

function checkDate(value) {
  if (!value) {
    return false;
  }
  const pattern = /(\d{4})-(\d{2})-(\d{2})/;
  return pattern.test(value);
}

function checkDateIsAfter(value, compareTo) {
  if (!value) {
    return false;
  }
  if (!compareTo) {
    return false;
  }
  const pattern = /(\d{4})-(\d{2})-(\d{2})/;
  if (!pattern.test(value)) {
    return false;
  }

  if (!pattern.test(compareTo)) {
    return false;
  }
  const valueDate = new Date(value);
  const compareToDate = new Date(compareTo);
  if (valueDate.getTime() < compareToDate.getTime()) {
    return false;
  }
  return true;
}
