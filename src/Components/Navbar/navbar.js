import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css';
import { FaCat } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
<<<<<<< HEAD
import { languages } from '../../language';

const _language  = languages['es'];
=======
import { ThemeSwitch } from '../../Components/ThemeSwitch/ThemeSwitch'
>>>>>>> 8c2ab3f5281f4685598e51c0d4ee3d91950988de

const Navbar = () => {
    return (
      // logo
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><FaCat className="cat"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
             {/* Lista de navegacion   */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">{_language.NAVBAR.NAVBAR_PETS}</a>
              </li>
              <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{_language.NAVBAR.NAVBAR_PEOPLE}</a>
              </li>
              <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{_language.NAVBAR.NAVBAR_NEWS}</a>
              </li>
              <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{_language.NAVBAR.NAVBAR_CONTACT}</a>
              </li>
            </ul>
            {/* Redes sociales  */}
            <ul id="redes">
              <li>
              <a className="navbar-brand" href="#"><FaFacebook className="face"/></a>
              </li>
              <li>
              <a className="navbar-brand" href="#"><FaInstagram className="insta"/></a>
              </li>
              <li>
              <a className="navbar-brand" href="#"><FaTwitter className="twitter"/></a>
              </li>
              <li>
              <a className="navbar-brand" href="#"><AiTwotoneMail className="mail"/></a>
              </li>
            </ul>
          </div>
        </div>
        <ThemeSwitch/>
      </nav>
        );
}

export default Navbar;