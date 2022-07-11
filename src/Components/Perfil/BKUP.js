import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Perfil.css";
import { ThemeSwitch } from "../ThemeSettings/ThemeSwitch/ThemeSwitch";
import { languages } from "../../language";
import dog_One from "../../assets/images/dog_1.jpg";
import dog_Two from "../../assets/images/dog_2.jpg";
import { FaRegUser } from "react-icons/fa";
import ThemeContext from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import { Redirect } from "react-router-dom";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  setDoc,
} from "firebase/firestore";
import { firestoreDB } from "../../services/firebase";
import Modal from "../Modal/Modal";
const Perfil = () => {
  const { lang } = useContext(ThemeContext);
  const _language = languages[lang];
  const { user } = useAuth();
  const [docUser, setDocUser] = useState({});
  const [petUser, setPetUser] = useState({});

  async function querySnapshot() {
    if (user !== null && user.email !== undefined) {
      const myCollection = doc(firestoreDB, "users", user.email);
      const docFound = await getDoc(myCollection);
      if (docFound.exists()) {
        console.log(docFound.data());
        setDocUser(docFound.data());
      } else {
        try {
          const docRef = await addDoc(collection(firestoreDB, "users"), {
            id: user.email,
            name: user.displayName,
            photo: user.photoURL,
            pets: [],
          });
          setDocUser(docRef.data());
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
      // querySnapshot.forEach((doc) => {
      //   debugger;
      //   let docId = doc.id;
      //   let docData = doc.data();
      //   console.log(docId);
      //   console.log(docData);
      // });
    }
  }

  useEffect(() => {
    try {
      querySnapshot();
    } catch (error) {
      console.log(error.message);
    }
  }, [user]);

  const saveForm = async (e) => {
    e.preventDefault();
    debugger;
    if (docUser !== undefined && docUser !== null) {
      if (
        docUser.pets !== undefined &&
        docUser.pets !== null &&
        docUser.pets.some((v) => (v.owner = docUser.id))
      ) {
        try {
          docUser.pets.map(async (item) => {
            debugger;
            const docRef = await addDoc(collection(firestoreDB, "pets"), item);
            console.log("Pet written with ID: ", docRef.id);
          });
        } catch (e) {
          console.error("Error adding Pet: ", e);
        }
      }
    }
  };

  if (user !== undefined && user !== null) {
    return (
      <div className={"container container-web"}>
        <div className="card card-web">
          <div className="row g-0">
            <div className="col-md-4">
              <ImgPerfil photoURL={user.photoURL} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="container-perfil">
                  <form
                    autoComplete="off"
                    className="form-group container-perfil__text"
                  >
                    <fieldset>
                      <h5 className="card-title card-title-web">
                        {/* {_language.PERFIL.TITLE} */}
                        Perfil del Usuario
                      </h5>
                      <label htmlFor="string">
                        {_language.PERFIL.INPUT_NAME}
                      </label>
                      <input
                        type="string"
                        className="form-control"
                        placeholder={_language.LOGIN.INPUT_PLACEHOLDER_NAME}
                        required
                        value={user.displayName}
                        disabled={user.displayName !== undefined ? true : false}
                      />
                      <label htmlFor="email">
                        {_language.PERFIL.INPUT_EMAIL}
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder={_language.PERFIL.INPUT_PLACEHOLDER_EMAIL}
                        required
                        value={user.email}
                        disabled
                      />
                      <label htmlFor="select">{_language.PERFIL.PETS}</label>
                    </fieldset>
                    <fieldset>
                      <h5 className="card-title card-title-web">
                        {/* {_language.PERFIL.TITLE} */}
                        Mis Mascotas
                      </h5>
                      <MyPets docUser={docUser} setDocUser={setDocUser} />
                    </fieldset>
                    <div className="buttonsConfirm">
                      <button
                        type="submit"
                        className="btnConf"
                        onClick={saveForm}
                      >
                        {/* {_language.PERFIL.CONFIRM} */}
                        Guardar Cambios
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const ImgPerfil = (props) => {
  const { photoURL } = props;
  if (photoURL !== undefined && photoURL !== null) {
    return (
      <img
        className="cat cat-home container-perfil__image"
        src={photoURL}
        alt="Perfil"
      ></img>
    );
  }
  return (
    <>
      <FaRegUser className="cat cat-home container-perfil__image" />
    </>
  );
};

function findArrayElementByName(array, name) {
  return array.find((element) => {
    return element.name === name;
  });
}

const MyPets = (props) => {
  const { docUser, setDocUser } = props;
  const [petSelected, setPetSelected] = useState(undefined);
  const openPet = async (e) => {
    e.preventDefault();
    const { textContent } = e.target;
    var petFind = findArrayElementByName(docUser.pets, textContent);
    if (petFind !== undefined && petFind !== null) {
      setPetSelected(petFind);
    }
  };

  if (docUser.pets !== undefined && docUser.pets !== null) {
    return (
      <>
        <div className="list-group">
          {docUser.pets.map((item) => (
            <button
              className="list-group-item list-group-item-action"
              data-bs-toggle="modal"
              data-bs-target="#modalPets"
              onClick={openPet}
              key={item.name}
            >
              {item.name}
            </button>
          ))}
        </div>
        <MyPetsDashboard
          petSelected={petSelected}
          setPetSelected={setPetSelected}
          docUser={docUser}
          setDocUser={setDocUser}
        />
      </>
    );
  }
  return (
    <div>
      <p>¿No tienes ninguna mascota agregada, quieres agregar alguna?</p>
      <MyPetsDashboard
        petSelected={undefined}
        setPetSelected={setPetSelected}
        docUser={docUser}
        setDocUser={setDocUser}
      />
    </div>
  );
};

const MyPetsDashboard = (props) => {
  const { petSelected, setPetSelected, docUser, setDocUser } = props;
  const sendNewPet = () => {
    setPetSelected(undefined);
  };
  return (
    <>
      <div className="buttonsConfirm">
        <button
          type="button"
          className="btnConf"
          data-bs-toggle="modal"
          data-bs-target="#modalPets"
          onClick={sendNewPet}
        >
          {/* {_language.PERFIL.CONFIRM} */}
          Agregar Mascota
        </button>
        <PetModal pet={petSelected} doc={docUser} setDoc={setDocUser} />
      </div>
    </>
  );
};

const PetModal = (props) => {
  const { pet, doc, setDoc } = props;
  const [petAdd, setPetAdd] = React.useState({
    type: "dog",
    name: "",
    age: 0,
    images: {
      imageOne: "",
      imageTwo: "",
      imageThree: "",
    },
  });
  useEffect(() => {
    if (pet !== undefined && pet !== null) {
      setPetAdd(pet);
    } else {
      setPetAdd({
        type: "dog",
        name: "",
        age: 0,
        images: {
          imageOne: "",
          imageTwo: "",
          imageThree: "",
        },
      });
    }
  }, [pet]);

  console.log("PET" + petAdd);
  const onChangePet = (e) => {
    const objTarget = e.target;
    const getValue = objTarget.value;
    if (objTarget.name === "petType") {
      setPetAdd({ ...petAdd, type: getValue });
    } else if (objTarget.name === "petName") {
      setPetAdd({ ...petAdd, name: getValue });
    } else if (objTarget.name === "petAge") {
      setPetAdd({ ...petAdd, age: getValue });
    } else if (objTarget.name === "petImgOne") {
      setPetAdd({
        ...petAdd,
        images: { ...petAdd.images, imageOne: getValue },
      });
    } else if (objTarget.name === "petImgTwo") {
      setPetAdd({
        ...petAdd,
        images: { ...petAdd.images, imageTwo: getValue },
      });
    } else if (objTarget.name === "petImgThree") {
      setPetAdd({
        ...petAdd,
        images: { ...petAdd.images, imageThree: getValue },
      });
    }
  };

  const savePet = async (e) => {
    e.preventDefault();
    petAdd.owner = doc.id;
    if (doc.pets === undefined || doc.pets === null) {
      let arrayPets = [];
      arrayPets.push(petAdd);
      setDoc({ ...doc, pets: arrayPets });
    } else {
      let arrayPets = doc.pets;
      arrayPets.push(petAdd);
      setDoc({ ...doc, pets: arrayPets });
    }
    console.log(petAdd);
  };

  return (
    <>
      <Modal
        title="Mis mascotas"
        modalName="modalPets"
        childrenFooter={<ModalBtn save={savePet} />}
      >
        {/* <Modal title={_language.PERFIL.Pets} modalName="modalSettings"> */}
        {/* <p>{_language.TOOLS.HEADING_THEME}</p> */}
        <p>Agregar Mascota</p>
        <fieldset>
          <label htmlFor="petType">Tipo de Mascota</label>
          <select
            name="petType"
            className="form-select"
            aria-label="Default select example"
            value={petAdd.type}
            onChange={onChangePet}
          >
            <option value="dog">Perro</option>
            <option value="cat">Gato</option>
          </select>
          <label>Nombre</label>
          <input
            type="string"
            name="petName"
            className="form-control"
            onChange={onChangePet}
            value={petAdd.name}
          />
          <label>Edad</label>
          <input
            type="number"
            name="petAge"
            className="form-control"
            onChange={onChangePet}
            value={petAdd.age}
          />
          <label>Imagenes</label>
          <div className="list-group">
            <input
              type="file"
              className="list-group-item list-group-item-action active"
              aria-current="true"
              name="petImgOne"
              onChange={onChangePet}
              value={petAdd.images.imageOne}
            ></input>
            <input
              type="file"
              name="petImgTwo"
              className="list-group-item list-group-item-action"
              onChange={onChangePet}
              value={petAdd.images.imageTwo}
            ></input>
            <input
              type="file"
              name="petImgThree"
              className="list-group-item list-group-item-action"
              onChange={onChangePet}
              value={petAdd.images.imageThree}
            ></input>
          </div>
        </fieldset>
      </Modal>
    </>
  );
};

const ModalBtn = (props) => {
  const { save } = props;
  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        data-bs-dismiss="modal"
        onClick={save}
      >
        Guardar
      </button>
    </>
  );
};

export default Perfil;
