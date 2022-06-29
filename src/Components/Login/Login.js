import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Icon } from "react-icons-kit";
import { google3 } from "react-icons-kit/icomoon/google3";
import { alertTriangle } from "react-icons-kit/feather/alertTriangle";
import { languages } from "../../language";
import ThemeContext from "../../context/ThemeContext";

export const Login = () => {
  const { lang } = React.useContext(ThemeContext);
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const history = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const _language = languages[lang];

  const logIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      history("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      history("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError("We sent you an email. Check your inbox");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="containerForm">
      <h1>{_language.LOGIN.HEADING_LOGIN}</h1>
      {error && (
        <span className="errorMsg">
          <Icon icon={alertTriangle}></Icon> {error}
        </span>
      )}
      <form autoComplete="off" className="form-group" onSubmit={logIn}>
        <label htmlFor="email">{_language.LOGIN.INPUT_EMAIL}</label>
        <input
          type="email"
          className="form-control"
          placeholder={_language.LOGIN.INPUT_PLACEHOLDER_EMAIL}
          required
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="password">{_language.LOGIN.INPUT_PASS}</label>
        <input
          type="password"
          className="form-control"
          placeholder={_language.LOGIN.INPUT_PLACEHOLDER_PASS}
          required
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <div className="buttonsConfirm">
          <button type="submit" className="btnConf">
          {_language.LOGIN.SIGN_IN}
          </button>
          <a href="#!" className="redirect" onClick={handleResetPassword}>
          {_language.LOGIN.FORGOT_PASSWORD}
          </a>
        </div>
      </form>
      <div className="buttonsExtra">
        <button onClick={handleGoogleSignin} className="btnConf google">
          <Icon icon={google3}></Icon> {_language.LOGIN.SIGN_IN_GOOGLE}
        </button>
        <span className="redirect">
        {_language.LOGIN.NOTREGISTER}<Link to="/signup">{_language.LOGIN.REGISTER}</Link>
        </span>
      </div>
    </div>
  );
};
export default Login;
