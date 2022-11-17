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
  value = value.toString();

  if (value.trim() === "") {
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
