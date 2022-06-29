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
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <FaWrench className="wrench" />
      </button>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content card-web">
            <div class="modal-header">
              <h5 className="card-title card-title-web">
                {_language.TOOLS.HEADING}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>{_language.TOOLS.HEADING_THEME}</p>
              <ThemeSwitch />
              <ThemeLanguage />
              <ThemeBackgrounds />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSettings;
