import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css';
import { FaCat } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-success">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><FaCat class="cat"/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Mascotas</a>
              </li>
              <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Personas</a>
              </li>
              <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Novedades</a>
              </li>
              <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Contacto</a>
              </li>
            </ul>
            <ul id="redes">
              <li>
              <a class="navbar-brand" href="#"><FaFacebook class="face"/></a>
              </li>
              <li>
              <a class="navbar-brand" href="#"><FaInstagram class="insta"/></a>
              </li>
              <li>
              <a class="navbar-brand" href="#"><FaTwitter class="twitter"/></a>
              </li>
              <li>
              <a class="navbar-brand" href="#"><AiTwotoneMail class="mail"/></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        );
}

export default Navbar;