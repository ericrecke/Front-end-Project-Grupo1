import React from "react";
import ThemeContext from "../../context/ThemeContext";
import "./Background.css";

const Background = (props) => {
  const { background } = React.useContext(ThemeContext);
  debugger;
  const { children } = props;
  return (
    <div
      className={
        background !== null
          ? "container-main container-" + background
          : "container-main container-white"
      }
    >
      {children}
    </div>
  );
};

export default Background;
