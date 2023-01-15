function validateForm() {
  const toWhereInput = document.getElementById("startingLocalization");
  const fromWhereInput = document.getElementById("endingLocalization");
  const dateFromInput = document.getElementById("dateFrom");
  const dateToInput = document.getElementById("dateTo");
  const vehicleInput = document.getElementById("vehicleId");
  const driverInput = document.getElementById("driverId");

  const errorToWhere = document.getElementById("errorStartingLocalization");
  const errorFromWhere = document.getElementById("errorEndingLocalization");
  const erorrDateFrom = document.getElementById("errorDateFrom");
  const errorDateTo = document.getElementById("errorDateTo");
  const errorVehicle = document.getElementById("errorVehicle");
  const errorDriver = document.getElementById("errorDriver");
  const errorsSummary = document.getElementById("errorsSummary");

  resetErrors(
    [
      toWhereInput,
      fromWhereInput,
      dateFromInput,
      dateToInput,
      driverInput,
      vehicleInput,
    ],
    [
      errorDateTo,
      erorrDateFrom,
      errorToWhere,
      errorFromWhere,
      errorVehicle,
      errorDriver,
    ],
    errorsSummary
  );

  let valid = true;

  if (!checkRequired(toWhereInput.value)) {
    valid = false;
    toWhereInput.classList.add("error-input");
    errorToWhere.innerText = "Pole jest wymagane";
  } else if (!checkTextLengthRange(toWhereInput.value, 2, 60)) {
    valid = false;
    toWhereInput.classList.add("error-input");
    errorToWhere.innerText = "Pole powinno zawierać od 2 do 60 znaków";
  }

  if (!checkRequired(fromWhereInput.value)) {
    valid = false;
    fromWhereInput.classList.add("error-input");
    errorFromWhere.innerText = "Pole jest wymagane";
  } else if (!checkTextLengthRange(fromWhereInput.value, 2, 60)) {
    valid = false;
    fromWhereInput.classList.add("error-input");
    errorFromWhere.innerText = "Pole powinno zawierać od 2 do 60 znaków";
  }

  if (!checkRequired(vehicleInput.value)) {
    valid = false;
    vehicleInput.classList.add("error-input");
    errorVehicle.innerText = "Pole jest wymagane";
  }

  if (!checkRequired(driverInput.value)) {
    valid = false;
    driverInput.classList.add("error-input");
    errorDriver.innerText = "Pole jest wymagane";
  }

  // let nowDate = new Date(),
  //   month = "" + (nowDate.getMonth() + 1),
  //   day = "" + nowDate.getDate(),
  //   year = "" + nowDate.getFullYear;
  // if (month.length < 2) {
  //   month = "0" + month;
  // }
  // if (day.length < 2) {
  //   day = "0" + day;
  // }
  // const nowString = [year, month, day].join("-");

  if (!checkRequired(dateFromInput.value.toString())) {
    valid = false;
    dateFromInput.classList.add("error-input");
    erorrDateFrom.innerText = "To pole jest wymagane";
  } else if (!checkDate(dateFromInput.value)) {
    valid = false;
    dateFromInput.classList.add("error-input");
    erorrDateFrom.innerText = "Zły format daty";
  }

  if (checkRequired(dateToInput.value.toString())) {
    if (!checkDate(dateToInput.value)) {
      valid = false;
      dateToInput.classList.add("error-input");
      errorDateTo.innerText = "Zły format daty";
    } else if (!checkDateIsAfter(dateToInput.value, dateFromInput.value)) {
      valid = false;
      dateToInput.classList.add("error-input");
      errorDateTo.innerText = "Data powinna być późniejsza niz data od";
    }
  }

  if (!valid) {
    errorsSummary.innerText = "Formularz zawiera błędy";
  }

  return valid;
}
