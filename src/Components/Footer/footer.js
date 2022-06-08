import React from "react";
import "./Footer.css";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { languages } from "../../language";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
const _language = languages["es"];

const Footer = () => {
  return (
    <footer className="bg-footer">
    {/* <footer className="bg-success fixed-bottom"> */}
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
