import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./navbar.css";
import { FaCat } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { iosContactOutline } from "react-icons-kit/ionicons/iosContactOutline";
import { Icon } from "react-icons-kit";
import { languages } from "../../language";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
const _language = languages["es"];

const Navbar = () => {
  const { logout, user } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    // logo
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container-fluid">
        <Link to="../" aria-current="page" className="nav-link active">
          <FaCat className="cat" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Lista de navegacion   */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="../" aria-current="page" className="nav-link active">
                {_language.NAVBAR.NAVBAR_INDEX}
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {_language.NAVBAR.NAVBAR_PETS}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {_language.NAVBAR.NAVBAR_PEOPLE}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {_language.NAVBAR.NAVBAR_NEWS}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {_language.NAVBAR.NAVBAR_CONTACT}
              </a>
            </li>
          </ul>
          {/* login/signUp   */}
          {user && (
            <ul className="navbar-nav rightSide">
              <li className="nav-item">
                <p className="userName nav-link active" aria-current="page">
                  <Icon icon={iosContactOutline}></Icon> {user.email}
                </p>
                <button className="logout" onClick={handleLogout} />
              </li>
            </ul>
          )}
          {!user && (
            <ul className="navbar-nav rightSide">
              <li className="nav-item">
                <Link
                  to="signup"
                  aria-current="page"
                  className="nav-link active"
                >
                  Registrarse
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="login"
                  aria-current="page"
                  className="nav-link active"
                >
                  Ingresar
                </Link>
              </li>
            </ul>
          )}
          {/* Redes sociales  */}
          {/* <ul id="redes">
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
          </ul> */}
        </div>
      </div>
      <ThemeSwitch />
    </nav>
  );
};

export default Navbar;
