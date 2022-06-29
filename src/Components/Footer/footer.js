import React, { useContext } from "react";
import "./Footer.css";
import { languages } from "../../language";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import ThemeContext from "../../context/ThemeContext";

const Footer = () => {
  const { dark } = useContext(ThemeContext);
  const _language = languages["es"];
  return (
    <footer className={`bg-footer${dark ? "-dark" : ""}`}>
      {/* Redes sociales  */}
      <ul id="redes">
        <li>
          <a className="navbar-brand" href="#">
            <FaFacebook className="face" />
          </a>
        </li>
        <li>
          <a className="navbar-brand" href="#">
            <FaInstagram className="insta" />
          </a>
        </li>
        <li>
          <a className="navbar-brand" href="#">
            <FaTwitter className="twitter" />
          </a>
        </li>
        <li>
          <a className="navbar-brand" href="#">
            <AiTwotoneMail className="mail" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
