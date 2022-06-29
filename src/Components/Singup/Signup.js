import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { languages } from "../../language";
import ThemeContext from "../../context/ThemeContext";

export const Signup = () => {
  const { lang } = React.useContext(ThemeContext);
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const _language = languages[lang];

  const history = useNavigate();

  const [error, setError] = useState("");

  const signUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      history("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="containerForm">
      <h1>{_language.REGISTER.HEADING_REGISTER}</h1>

      <form className="form-group" autoComplete="off" onSubmit={signUp}>
        <label>{_language.REGISTER.INPUT_EMAIL} </label>
        <input
          type="text"
          className="form-control"
          placeholder={_language.REGISTER.INPUT_PLACEHOLDER_EMAIL}
          required
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label>{_language.REGISTER.INPUT_PASS}</label>
        <input
          type="password"
          className="form-control"
          placeholder={_language.REGISTER.INPUT_PLACEHOLDER_PASS}
          required
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <div className="buttonsConfirm">
          <button type="submit" className="btnConf">
          {_language.REGISTER.CREATE_ACCOUNT}
          </button>
          <span className="redirect">
          {_language.REGISTER.ARENT_YOU_REGISTER} <Link to="/login">{_language.REGISTER.SIGN_UP}</Link>
          </span>
        </div>
      </form>
      {error && <div className="errorMsg">{error}</div>}
    </div>
  );
};
export default Signup;
