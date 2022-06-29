import React from "react";
import ThemeContext from "../../context/ThemeContext";

const ThemeProvider = ({ children }) => {
  var langStorage = localStorage.getItem("language");
  var bgStorage = localStorage.getItem("backgroundWeb");
  var darkStorage = localStorage.getItem("isDarkMode");

  const [lang, setLang] = React.useState(
    langStorage !== null || langStorage !== undefined ? langStorage : "es"
  );
  const [background, setBackground] = React.useState(
    bgStorage !== null || bgStorage !== undefined ? bgStorage : "black"
  );
  const [dark, setDark] = React.useState(
    darkStorage !== null || darkStorage !== undefined ? darkStorage : false
  );

  const toggleLang = (e) => {
    setLang(e);
    localStorage.setItem("language", e);
  };
  const toggleBackground = (e) => {
    setBackground(e);
    localStorage.setItem("backgroundWeb", e);
  };
  const toggleDark = (e) => {
    setDark(e);
    localStorage.setItem("isDarkMode", e);
  };

  return (
    <>
      <ThemeContext.Provider
        value={{
          lang,
          background,
          dark,
          toggleLang,
          toggleBackground,
          toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
