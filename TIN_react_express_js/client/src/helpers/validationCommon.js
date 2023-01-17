export function checkRequired(value) {
  if (!value) {
    return false;
  }
  value = value.toString().trim();

  return value !== "";
}

export function checkRange(value, min, max) {
  if (!value) {
    return false;
  }
  if (value < min || value > max) {
    return false;
  }
  return true;
}

export function checkTextLengthRange(value, min, max) {
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

export function CheckYear(value) {
  if (!value) return false;
  value = value.toString().trim();
  const date = new Date();
  const currYear = date.getFullYear();
  if (value > currYear) {
    return false;
  }
  if (value < 1900) {
    return false;
  }
  return true;
}

export function CheckVehicleYear(value) {
  if (!value) return false;
  value = value.toString().trim();
  const date = new Date();
  const currYear = date.getFullYear();
  if (value > currYear) {
    return false;
  }
  if (value < 1900) {
    return false;
  }

  return true;
}

export function checkDate(value) {
  if (!value) {
    return false;
  }
  const pattern = /(\d{4})-(\d{2})-(\d{2})/;
  return pattern.test(value);
}

export function checkDateIsAfter(value, compareTo) {
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
