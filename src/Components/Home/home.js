import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { languages } from "../../language";
import dog_One from "../../assets/images/dog_1.jpg";
import dog_Two from "../../assets/images/dog_2.jpg";
import { FaCat } from "react-icons/fa";

const _language = languages["es"];
//Home de prueba para tener 1 base de como se podria ver la busqueda de los animales
//aqui se podria obtener mediante Api a los animales e ir recorriendolos, teniendo 1 carrousel de varias imagenes que tenga el anime que nos devuelva la base
//y dos botones para seleccionar si continuar o no
//TO DO
// Faltaria agregar lenguaje
// Faltaria funcionalidad de Animales y demas
// Faltaria agregar el tema Dark
// Es solo una base
const Home = () => {
  return (
    <div className="container container-web">
      <div className="card card-web">
        <div className="card-body">
          <div className="container-left">
            <FaCat className="cat cat-home" />
          </div>
          <div className="container-right">
            <h5 className="card-title card-title-web">Grupo 1 Cac 22013</h5>
            <p className="card-text card-text-web">
              # Front-end-Project Grupo 1 Comision 22013 Codo a Codo GO Temática
              elegida: Aplicación tipo Tinder para adopción de mascotas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
