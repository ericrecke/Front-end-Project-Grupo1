import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import "./ThemeSettings.css";
import { FaRegHeart, FaRegTimesCircle, FaWrench } from "react-icons/fa";
import ThemeBackgrounds from "./ThemeBackgrounds/ThemeBackgrounds";
import { languages } from "../../language";
import dog_One from "../../assets/images/dog_1.jpg";
import dog_Two from "../../assets/images/dog_2.jpg";
import { ThemeSwitch } from "./ThemeSwitch/ThemeSwitch";
import ThemeContext from "../../context/ThemeContext";
import ThemeLanguage from "./ThemeLanguage/ThemeLanguage";
import Modal from "../Modal/Modal";

const UserSettings = () => {
  const { lang } = useContext(ThemeContext);
  const _language = languages[lang];
  return (
    <div className="container container-web">
      <div className="card card-web">
        <div className="card-body">
          <h5 className="card-title card-title-web">
            {_language.TOOLS.HEADING}
          </h5>
          <p>{_language.TOOLS.HEADING_THEME}</p>
          <ThemeSwitch />
          <ThemeLanguage />
          <ThemeBackgrounds />
        </div>
      </div>
    </div>
  );
};

export const UserSettingsModal = () => {
  const { lang } = useContext(ThemeContext);
  const _language = languages[lang];
  return (
    <>
      <button
        type="button"
        className="btn"
        data-bs-toggle="modal"
        data-bs-target="#modalSettings"
      >
        <FaWrench className="wrench" />
      </button>
      <Modal title={_language.TOOLS.HEADING} modalName="modalSettings">
      <p>{_language.TOOLS.HEADING_THEME}</p>
              <ThemeSwitch />
              <ThemeLanguage />
              <ThemeBackgrounds />
      </Modal>
    </>
  );
};

export default UserSettings;
