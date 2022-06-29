import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./People.css";
import { ThemeSwitch } from "../ThemeSettings/ThemeSwitch/ThemeSwitch";
import { languages } from "../../language";

const _language = languages["es"];
const People = () => {
  return (
    <div className="container container-web">
      <div className="card card-web">
        <div className="card-body">
            <h5 className="card-title card-title-web">Contacto</h5>
            <p className="card-text card-text-web">
              personas en desarrollo
            </p>
            </div>
      </div>
    </div>
  );
};

export default People;
