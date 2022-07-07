import React from "react";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./navbar.css";
import { FaFacebook, FaRegUser, FaInstagram, FaTwitter, FaCat, FaWrench } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { iosContactOutline } from "react-icons-kit/ionicons/iosContactOutline";
import { Icon } from "react-icons-kit";
import { languages } from "../../language";
import { ThemeSwitch } from "../ThemeSettings/ThemeSwitch/ThemeSwitch";
import ThemeContext from "../../context/ThemeContext";
import { UserSettingsModal } from "../ThemeSettings/ThemeSettings";

const Navbar = () => {
  const { lang, dark } = useContext(ThemeContext);
  const _language = languages[lang];
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
    <nav className={`navbar navbar-expand-lg navbar${dark ? "-dark" : "-light"} bg-navbar${dark ? "-dark" : ""}`}>
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
              <Link to="/pets" aria-current="page" className="nav-link active">
                {_language.NAVBAR.NAVBAR_PETS}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/people"
                aria-current="page"
                className="nav-link active"
              >
                {_language.NAVBAR.NAVBAR_PEOPLE}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" aria-current="page" className="nav-link active">
                {_language.NAVBAR.NAVBAR_NEWS}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                aria-current="page"
                className="nav-link active"
              >
                {_language.NAVBAR.NAVBAR_CONTACT}
              </Link>
            </li>
          </ul>
          {/* login/signUp   */}
          {user && (
            <ul className="navbar-nav rightSide">
              {/* <Icon className="userName" icon={iosContactOutline}></Icon> */}
              <li className="nav-item userName nav-link active">
              <Link
                to="/perfil"
                aria-current="page"
                className="nav-link active userName"
              >
                <FaRegUser className="userName-icon"/> Perfil
                {/* <FaRegUser className="userName-icon"/> {user.email} */}
              </Link>
                
              </li>
              <li className="nav-item">
                <button className="logout" onClick={handleLogout}>
                  Salir
                </button>
              </li>
              <li className="nav-item">
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
          {/* <Link to="/settings" aria-current="page" className="nav-link active">
            <FaWrench className="wrench" />
          </Link> */}
          <UserSettingsModal />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
