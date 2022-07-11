import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./Pets.css";
import { FaRegHeart, FaRegTimesCircle } from "react-icons/fa";
import { ThemeSwitch } from "../ThemeSettings/ThemeSwitch/ThemeSwitch";
import { languages } from "../../language";
import dog_One from "../../assets/images/dog_1.jpg";
import dog_Two from "../../assets/images/dog_2.jpg";

import firebase, { firestoreDB } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";

const _language = languages["es"];
const Pets = () => {
  debugger;

  useEffect(() => {
    debugger;
    try {
      debugger;
      async function getFireBaseDoc() {
        const myCollection = collection(firestoreDB, "users");
        const querySnapshot = await getDocs(myCollection);
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          debugger;
          console.log(`${doc.id} => ${doc.data()}`);
        });
      }
      getFireBaseDoc();
    } catch (error) {
      console.log(error.message);
    }
  });

  return (
    <div className="container container-web">
      <div className="card card-web">
        <div className="card-body">
          <h5 className="card-title card-title-web">Tito el Bambino</h5>
          <p className="card-text card-text-web">
            Lorem ipsum dolor sit amet, et qui alia patrioque assentior. Te sea
            eros option, et mazim causae vituperatoribus his. Et soleat
            euripidis nam, pertinacia definitionem vel eu, ei brute iisque
            praesent qui. Cu his doctus audiam assentior, sonet scripta has te.
            Ei hinc duis vix, sea debet erant volutpat ei.
          </p>

          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100 img-slider"
                src={dog_One}
                alt="First slide"
              ></img>
              <Carousel.Caption>
                <PetInformation />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block img-slider"
                src={dog_Two}
                alt="Second slide"
              ></img>
              <Carousel.Caption>
                <PetInformation />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block img-slider"
                src={dog_Two}
                alt="Third slide"
              ></img>
              <Carousel.Caption>
                <PetInformation />
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

const PetInformation = () => {
  return (
    <div>
      {/* <h5 className="card-title card-title-web">Tito el Bambino</h5> */}
      <ButtonGroup />
    </div>
  );
};

const ButtonGroup = () => {
  return (
    <div className="btn-group" role="group" aria-label="Listado Botones">
      <button type="button" className="btn btn-danger">
        <FaRegTimesCircle />
      </button>
      <button type="button" className="btn btn-success mr-5">
        <FaRegHeart />
      </button>
    </div>
  );
};

export default Pets;
