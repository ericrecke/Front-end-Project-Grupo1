import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Pets.css";
import { FaRegHeart, FaRegTimesCircle } from "react-icons/fa";
import { ThemeSwitch } from "../ThemeSettings/ThemeSwitch/ThemeSwitch";
import { languages } from "../../language";
import dog_One from "../../assets/images/dog_1.jpg";
import dog_Two from "../../assets/images/dog_2.jpg";

import firebase, { firestoreDB } from "../../services/firebase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";

const Pets = () => {
  const _language = languages["es"];
  const { user } = useAuth();
  const [docUser, setDocUser] = useState(null);
  const [fbDocument, setFbDocument] = useState(null);
  const [petsList, setPetsList] = useState([]);

  async function querySnapshot() {
    if (user !== null && user.email !== undefined) {
      const myCollection = doc(firestoreDB, "users", user.email);
      const docFound = await getDoc(myCollection);
      if (docFound.exists()) {
        setDocUser(docFound.data());
        setFbDocument(docFound);
      } else {
        try {
          const docRef = await setDoc(doc(firestoreDB, "users", user.email), {
            id: user.email,
            name: user.displayName,
            photo: user.photoURL,
            pets: [],
          });
          setDocUser(docRef.data());
          console.log("Document written with ID: ", docRef.id);
          setFbDocument(docRef);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    }
  }

  useEffect(() => {
    async function fetchData() {
      if (user !== null) {
        try {
          await querySnapshot();
        } catch (error) {
          console.log(error.message);
        }
      }
    }
    fetchData();
  }, [user]);

  useEffect(() => {
    async function fetchData() {
      if (docUser !== null) {
        try {
          await FuncGetPets();
        } catch (error) {
          console.log(error.message);
        }
      }
    }
    fetchData();
  }, [docUser]);

  async function FuncGetPets() {
    try {
      async function getFireBaseDoc() {
        const myCollection = collection(firestoreDB, "pets");
        let getPets = await getDocs(myCollection);
        // .filter((pet) => pet.owner === docUser.id);
        getPets.forEach((doc) => {
          let petData = doc.data();
          if (petData.owner !== docUser.id) {
            setPetsList((oldPets) => [...oldPets, petData]);
            console.log(`${doc.id} => ${doc.data()}`);
            console.log(doc.data());
          }
        });
      }
      getFireBaseDoc();
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="container container-web">
      <div className="card card-web">
        <div className="card-body">
          <PetInformation petsList={petsList} />
        </div>
      </div>
    </div>
  );
};

const PetInformation = (props) => {
  const { petsList } = props;
  if (petsList !== undefined && petsList !== null && petsList.length > 0) {
    return (
      <>
        <h5 className="card-title card-title-web">
          {petsList[0].name} {petsList[0].surName}
        </h5>
        <p className="card-text card-text-web">{petsList[0].description}</p>

        <Carousel fade>
          {petsList[0].images.map((image) => (
            <Carousel.Item key={image.name}>
              <img
                className="d-block img-fluid w-100 img-slider"
                src={image.preview}
                alt={image.name}
              ></img>
              <Carousel.Caption>
                <ButtonGroup />
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </>
    );
  }
  return (
    <>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <h2>Buscando si hay alguna mascota para adoptar</h2>
      <p>
        Si ves que tarda mucho, es porque no encontramos ninguna para poder
        ofrecerte actualmente, podrias intentar mas tarde!
      </p>
    </>
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
