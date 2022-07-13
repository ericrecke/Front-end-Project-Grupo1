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
  const [petUser, setPetUser] = useState(null);
  const [petsList, setPetsList] = useState([]);

  async function querySnapshot() {
    if (user !== null && user.email !== undefined) {
      const myCollection = doc(firestoreDB, "users", user.email);
      const docFound = await getDoc(myCollection);
      if (docFound.exists()) {
        const personInfo = docFound.data();
        setDocUser(personInfo);
        const relationFound = await getDoc(
          doc(firestoreDB, "users_pets", personInfo.id_UserPets)
        );
        if (relationFound.exists()) {
          setPetUser(relationFound.data());
        }
      }
    }
  }

  // pet, docUser, petUser, liked
  const petButton = (liked) => async () => {
    debugger;
    try {
      let petInstance = petsList[0];
      if (liked) {
        petInstance.likes.push(docUser.id);
        await setDoc(doc(firestoreDB, "pets", petInstance.id), petInstance);
        let petsUnliked = petUser.petsUnliked;
        petsUnliked.push(petInstance.id);
        setPetUser({ ...petUser, petsUnliked: petsUnliked });
      } else {
        let petsLiked = petUser.petsLiked;
        petsLiked.push(petInstance.id);
        setPetUser({ ...petUser, petsLiked: petsLiked });
      }
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  useEffect(() => {
    debugger;
    async function fetchData() {
      if (petUser !== null && petUser !== undefined) {
        await setDoc(
          doc(firestoreDB, "users_pets", docUser.id_UserPets),
          petUser
        );
      }
    }
    fetchData();
  }, [petUser]);

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
          <PetInformation petsList={petsList} petButton={petButton} />
        </div>
      </div>
    </div>
  );
};

const PetInformation = (props) => {
  const { petsList, petButton } = props;
  if (petsList !== undefined && petsList !== null && petsList.length > 0) {
    return (
      <>
        <h5 className="card-title card-title-web text-center">
          {petsList[0].name} {petsList[0].surName}
        </h5>
        Edad: {petsList[0].age}
        <p className="card-text card-text-web"> {petsList[0].description}</p>
        <Carousel fade>
          {petsList[0].images.map((image) => (
            <Carousel.Item key={image.name}>
              <img
                className="d-block img-fluid w-100 img-slider"
                src={image.preview}
                alt={image.name}
              ></img>
              <Carousel.Caption>
                <ButtonGroup pet={petsList[0].id} petButton={petButton} />
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

const ButtonGroup = (props) => {
  const { pet, petButton } = props;
  return (
    <div className="btn-group" role="group" aria-label="Listado Botones">
      <button
        type="button"
        className="btn btn-danger"
        onClick={petButton(true)}
      >
        <FaRegTimesCircle />
      </button>
      <button
        type="button"
        className="btn btn-success mr-5"
        onClick={petButton(false)}
      >
        <FaRegHeart />
      </button>
    </div>
  );
};

export default Pets;
