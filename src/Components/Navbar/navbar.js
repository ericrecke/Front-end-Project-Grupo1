import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-success">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Home</a>
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
          </div>
        </div>
      </nav>
        );
}

export default Navbar;