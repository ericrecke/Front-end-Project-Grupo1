import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Contact.css";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { languages } from "../../language";

const _language = languages["es"];
const Contact = () => {
  return (
    <div className="container container-web">
      <div className="card card-web">
        <div className="card-body">
            <h5 className="card-title card-title-web">Contacto</h5>
            <p className="card-text card-text-web">
              contacto en desarrollo
            </p>
            </div>
      </div>
    </div>
  );
};

export default Contact;
