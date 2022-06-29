import React, { useContext, useState } from "react";
import "./ThemeLanguage.css";
import { languages } from "../../../language";
import ThemeContext from "../../../context/ThemeContext";

export const ThemeLanguage = () => {
  const { lang, toggleLang } = React.useContext(ThemeContext);
  const _language = languages[lang];

  const handleOnChange = (e) => {
    if (e.target.value !== "none") {
      toggleLang(e.target.value, lang);
    }
  };

  return (
    <div>
      <p>{_language.TOOLS.HEADING_LANGUAGE}</p>
      <select
        className="form-select"
        aria-label="Default select example"
        defaultValue={lang}
        onChange={handleOnChange}
      >
        <option value="es">Spanish</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default ThemeLanguage;
