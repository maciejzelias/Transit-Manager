function validateForm() {
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const birthdayYearInput = document.getElementById("birthdayYear");

  const errorFirstName = document.getElementById("errorFirstName");
  const errorLastName = document.getElementById("errorLastName");
  const errorBirthdayYear = document.getElementById("errorBirthdayYear");
  const errorsSummary = document.getElementById("errorsSummary");

  resetErrors(
    [firstNameInput, lastNameInput, birthdayYearInput],
    [errorFirstName, errorLastName, errorBirthdayYear],
    errorsSummary
  );

  let valid = true;

  if (!checkRequired(firstNameInput.value)) {
    valid = false;
    firstNameInput.classList.add("error-input");
    errorFirstName.innerText = "Pole jest wymagane";
  } else if (!checkTextLengthRange(firstNameInput.value, 2, 60)) {
    console.log("123");
    valid = false;
    firstNameInput.classList.add("error-input");
    errorFirstName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
  }

  if (!checkRequired(lastNameInput.value)) {
    valid = false;
    lastNameInput.classList.add("error-input");
    errorLastName.innerText = "Pole jest wymagane";
  } else if (!checkTextLengthRange(lastNameInput.value, 2, 60)) {
    valid = false;
    lastNameInput.classList.add("error-input");
    errorLastName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
  }

  if (!checkRequired(birthdayYearInput.value)) {
    valid = false;
    birthdayYearInput.classList.add("error-input");
    errorBirthdayYear.innerText = "Pole jest wymagane";
  } else if (!CheckYear(birthdayYearInput.value)) {
    valid = false;
    birthdayYearInput.classList.add("error-input");
    errorBirthdayYear.innerText =
      "Pole musi zawierać rok mniejszy niz aktualny";
  }

  if (!valid) {
    errorsSummary.innerText = "Formularz zawiera błędy";
  }

  return valid;
}
