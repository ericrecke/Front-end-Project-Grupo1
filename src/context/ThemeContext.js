import React from "react";

const defaultTheme = {
  lang: "es",
  background: "black",
  dark: false,
  toggleLang: () => {},
  toggleBackground: () => {},
  toggleDark: () => {},
};

const ThemeContext = React.createContext(defaultTheme);

export default ThemeContext;
