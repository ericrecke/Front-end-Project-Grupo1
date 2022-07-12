import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ThemeBackgrounds.css";
import { languages } from "../../../language";
import BgAnimalsWhite from "../../../assets/images/bgwhite.png";
import BgAnimalsBlack from "../../../assets/images/bgblack.png";
import ThemeContext from "../../../context/ThemeContext";

const ThemeBackgrounds = () => {
  const { lang } = useContext(ThemeContext);
  const _language = languages[lang];
  return (
    <div>
      <p>{_language.TOOLS.HEADING_THEME}</p>
      <div className="card-group">
        <div className="row">
          <BackgroundItem
            name="white"
            haveImage={false}
            source="rect-bg-white"
          />
          <BackgroundItem
            name="black"
            haveImage={false}
            source="rect-bg-black"
          />
          <BackgroundItem
            name="brown"
            haveImage={false}
            source="rect-bg-brown"
          />
          <BackgroundItem
            name="brownTwo"
            haveImage={false}
            source="rect-bg-brownTwo"
          />
          <BackgroundItem
            name="bgBlack"
            haveImage={true}
            source={BgAnimalsBlack}
          />
          <BackgroundItem
            name="bgWhite"
            haveImage={true}
            source={BgAnimalsWhite}
          />
        </div>
      </div>
    </div>
  );
};

const BackgroundItem = (props) => {
  const { haveImage, source, name } = props;
  const { toggleBackground } = React.useContext(ThemeContext);
  const handleOnClick = (e) => {
    toggleBackground(e.currentTarget.name);
  };
  return (
    <div className="card card-bg col-md-3">
      <button className="button-bg" name={name} onClick={handleOnClick}>
        <BackgroundContent haveImage={haveImage} source={source} />
      </button>
    </div>
  );
};
const BackgroundContent = (props) => {
  const { haveImage, source } = props;
  if (haveImage) {
    return <img className="card-img-top" src={source}></img>;
  }
  return (
    <svg className={"svg-bg " + source}>
      <rect className="rect-bg" />
    </svg>
  );
};

export default ThemeBackgrounds;
