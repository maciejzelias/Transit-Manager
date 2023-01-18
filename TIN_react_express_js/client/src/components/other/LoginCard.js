import React, { useRef, useState } from "react";
import Modal from "../UI/Modal";
import { useTranslation } from "react-i18next";
import { validateField } from "../../helpers/validationLoginForm";
import { loginApiCall } from "../../apiCalls/authApiCalls";

export default function LoginCard(props) {
  const { t } = useTranslation();
  const [loginError, setLoginError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [signingUpError, setSigningUpError] = useState(null);
  const loginRef = useRef();
  const passwordRef = useRef();
  const submitHandler = async (event) => {
    event.preventDefault();
    const loginErrorMessage = validateField("login", loginRef.current.value);
    const passwordErrorMessage = validateField(
      "password",
      passwordRef.current.value
    );
    if (loginErrorMessage || passwordErrorMessage) {
      setLoginError(loginErrorMessage);
      setPasswordError(passwordErrorMessage);
      return;
    }

    const response = await fetch(loginApiCall(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }),
    });

    setSigningUpError(null);

    const data = await response.json();

    if (response.status === 200 && data.token) {
      const userString = JSON.stringify(data);
      props.onSubmit({ ...userString, login: loginRef.current.value });
    } else {
      setSigningUpError(t(`main-page.${data.message}`));
    }
  };
  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitHandler} className="form">
        <label htmlFor="login">{t("main-page.login")}</label>
        <input type="text" id="login" ref={loginRef} />
        <span id="errorLogin" className="errors-text">
          {loginError}
        </span>
        <label htmlFor="password">{t("main-page.password")}</label>
        <input type="password" id="password" ref={passwordRef} />
        <span id="errorPassword" className="errors-text">
          {passwordError}
        </span>
        <div className="form-buttons">
          <p id="errorsSummary" className="errors-text"></p>
          <input
            className="form-button-submit"
            type="submit"
            value={t("main-page.log-in")}
          />
          <span className="errors-text">{signingUpError}</span>
        </div>
      </form>
    </Modal>
  );
}
