import React, { useContext, useEffect, useId, useState } from "react";
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
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firestoreDB } from "../../services/firebase";
import Modal from "../Modal/Modal";
import MyPets from "./MyPets/MyPets";
const Perfil = () => {
  const { lang } = useContext(ThemeContext);
  const _language = languages[lang];
  const { user } = useAuth();
  const [docUser, setDocUser] = useState(null);
  // const [fbDocument, setFbDocument] = useState(null);
  const [petUser, setPetUser] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [saveResult, setSaveResult] = useState(undefined);

  async function querySnapshot() {
    if (user !== null && user.email !== undefined) {
      const myCollection = doc(firestoreDB, "users", user.email);
      const docFound = await getDoc(myCollection);
      if (docFound.exists()) {
        setDocUser(docFound.data());
        // setFbDocument(docFound);
      } else {
        try {
          debugger;
          const newUser_Pets = {
            id: user.email,
            petsLiked: [],
            petsUnliked: [],
            peopleLiked: [],
            peopleUnliked: [],
            match: [],
          };
          const user_Pets = await addDoc(
            collection(firestoreDB, "users_pets"),
            newUser_Pets
          );
          const docRef = {
            id: user.email,
            id_UserPets: user_Pets.id,
            name: user.displayName,
            photo: user.photoURL,
            pets: [],
            liked: [],
          };
          await setDoc(doc(firestoreDB, "users", user.email), docRef);
          setDocUser(docRef);
          console.log("Document written with ID: ", docRef.id);
          // setFbDocument(docRef);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    }
  }

  useEffect(() => {
    if (
      docUser !== null &&
      docUser !== undefined &&
      docUser.pets !== undefined &&
      docUser.pets !== null &&
      docUser.pets.some((p) => p !== null || p !== undefined)
    ) {
      docUser.pets.map(async (item) => {
        let collPetsUser = doc(firestoreDB, "pets", item);
        const petFound = await getDoc(collPetsUser);
        if (petFound.exists()) {
          setPetUser((oldPets) => [...oldPets, petFound.data()]);
        } else {
          console.log("Pet not founded with Id: ", petFound.id);
        }
      });
    }
  }, [docUser]);

  useEffect(() => {
    try {
      querySnapshot();
    } catch (error) {
      console.log(error.message);
    }
  }, [user]);

  const onChangePerfil = (e) => {
    const objTarget = e.target;
    const getValue = objTarget.value;
    if (objTarget.name === "perfilName") {
      setDocUser({ ...docUser, name: getValue });
    } else if (objTarget.name === "perfilEmail") {
      setDocUser({ ...docUser, id: getValue });
    }
  };

  const saveForm = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveResult(undefined);
    const metadata = {
      contentType: "image/jpeg",
    };
    if (docUser !== undefined && docUser !== null) {
      if (
        petUser !== undefined &&
        petUser !== null &&
        petUser.some((v) => (v.owner = docUser.id))
      ) {
        try {
          petUser.map(async (item) => {
            let petRef = undefined;
            if (item.id !== undefined && item.id !== null) {
              await setDoc(doc(firestoreDB, "pets", item.id), item);
              petRef = item;
            } else {
              petRef = await addDoc(collection(firestoreDB, "pets"), item);
              item.id = petRef.id;
              docUser.pets.push(petRef.id);
            }
            await setDoc(doc(firestoreDB, "users", user.email), docUser);
            item.images.map(async (imagePet) => {
              if (imagePet.type === undefined || imagePet.type === null) {
                const storage = getStorage();
                const storageRef = ref(storage, "pets/" + imagePet.name);
                let blob = await fetch(imagePet.preview).then((r) => r.blob());
                await uploadBytes(storageRef, blob, metadata);
                imagePet.type = item.type;
                const getFile = await getDownloadURL(storageRef);
                imagePet.preview = getFile;
              }
              await setDoc(doc(firestoreDB, "pets", petRef.id), item);
              setIsSaving(false);
              setSaveResult({
                ...saveResult,
                success: true,
                data: "Información guardada satisfactoriamente.",
              });
            });
          });
        } catch (e) {
          console.error("Error adding Pet: ", e);
        }
      }
    }
  };

  if (docUser !== undefined && docUser !== null) {
    return (
      <div className={"container container-web"}>
        <div className="card card-web">
          <div className="row g-0">
            <div className="col-md-4">
              <ImgPerfil photoURL={docUser.photo} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="container-perfil">
                  <form
                    autoComplete="off"
                    className="form-group container-perfil__text"
                    encType="multipart/form-data"
                  >
                    <Alerts isSaving={isSaving} saveResult={saveResult} />
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
                        placeholder={_language.PERFIL.INPUT_PLACEHOLDER_NAME}
                        required
                        onChange={onChangePerfil}
                        value={docUser.name}
                        disabled={docUser.name !== null ? true : false}
                      />
                      <label htmlFor="email">
                        {_language.PERFIL.INPUT_EMAIL}
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder={_language.PERFIL.INPUT_PLACEHOLDER_EMAIL}
                        required
                        value={docUser.id}
                        disabled
                      />
                      <label htmlFor="select">{_language.PERFIL.PETS}</label>
                    </fieldset>
                    <fieldset>
                      <h5 className="card-title card-title-web">
                        {/* {_language.PERFIL.TITLE} */}
                        Mis Mascotas
                      </h5>
                      <MyPets
                        petUser={petUser}
                        setPetUser={setPetUser}
                        docUser={docUser}
                        setDocUser={setDocUser}
                      />
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

const Alerts = (props) => {
  const { isSaving, saveResult } = props;
  if (isSaving) {
    return (
      <>
        <Alerts_Header classAlert="alert-warning">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <strong>Guardando datos,</strong> por favor espere.
        </Alerts_Header>
      </>
    );
  } else if (saveResult !== undefined && saveResult.success) {
    return (
      <>
        <Alerts_Header classAlert="alert-success">
          {saveResult.data}
        </Alerts_Header>
      </>
    );
  } else if (saveResult !== undefined && !saveResult.success) {
    return (
      <>
        <Alerts_Header classAlert="alert-danger">
          {saveResult.data}
        </Alerts_Header>
      </>
    );
  }
};

const Alerts_Header = (props) => {
  const { children, classAlert } = props;
  return (
    <>
      <div
        className={`alert ${classAlert} alert-dismissible fade show`}
        role="alert"
      >
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
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

export default Perfil;
