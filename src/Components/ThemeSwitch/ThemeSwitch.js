import { ThemeContainer } from "./ThemeContainer";
import darkTheme from "../../assets/dark-theme.svg";
import lightTheme from "../../assets/light-theme.svg";
import { useState, useEffect } from "react";

export const ThemeSwitch = () => {
  const [isDarkMode, setDarkMode] = useState(null);
  if (isDarkMode === null) {
    setDarkMode(localStorage.getItem("isDarkMode") === "true");
  }
  return (
    <ThemeContainer id="ThemeContainer">
      <img
        alt="light theme"
        src={lightTheme}
        className={isDarkMode ? "dark" : ""}
      />
      <ThemeContainer.Check
        onClick={(e) => {
          setDarkMode(e.target.checked);
          localStorage.setItem("isDarkMode", e.target.checked);
          window.location.reload();
        }}
        type="switch"
        id="custom-switch"
        checked={isDarkMode}
      />
      <img
        alt="dark theme"
        src={darkTheme}
        className={isDarkMode ? "dark" : ""}
      />
    </ThemeContainer>
  );
};
