import { ThemeContainer } from "./ThemeContainer";
import darkTheme from "../../../assets/dark-theme.svg";
import lightTheme from "../../../assets/light-theme.svg";
import { useState, useEffect, useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";

export const ThemeSwitch = () => {
  const { dark, toggleDark } = useContext(ThemeContext);
  const handleOnClick = (e) => {
    toggleDark(e.target.checked);
  };

  return (
    <ThemeContainer id="ThemeContainer">
      <img alt="light theme" src={lightTheme} className={dark ? "dark" : ""} />
      <ThemeContainer.Check
        onClick={handleOnClick}
        type="switch"
        id="custom-switch"
        defaultChecked={dark}
      />
      <img alt="dark theme" src={darkTheme} className={dark ? "dark" : ""} />
    </ThemeContainer>
  );
};
