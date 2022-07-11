import React, { useCallback, useContext, useEffect, useState } from "react";
import "./MyPets.css";
import { ThemeSwitch } from "../../ThemeSettings/ThemeSwitch/ThemeSwitch";
import { languages } from "../../../language";
import Modal from "../../Modal/Modal";
import { FaRegUser } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import InsertFile from "../../../assets/images/insert-file.png";
import { firestorage } from "../../../services/firebase";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBlob,
} from "firebase/storage";

var PetJson = {
  type: "dog",
  name: "",
  surName: "",
  age: 0,
  owner: "",
  images: [],
};
const MyPets = (props) => {
  const { petUser, setPetUser, docUser } = props;
  const [petSelected, setPetSelected] = useState(undefined);
  const [petToSend, setpetToSend] = useState(undefined);
  const openPet = async (e) => {
    e.preventDefault();
    const { textContent } = e.target;
    var petFind = findArrayElementByName(petUser, textContent);
    if (petFind !== undefined && petFind !== null) {
      setpetToSend(petFind);
    }
  };
  debugger;

  useEffect(() => {
    debugger;
    if (petSelected !== null) setpetToSend(petSelected);
    else setpetToSend(PetJson);
  }, [petSelected]);

  if (petUser !== undefined && petUser !== null && petUser.length > 0) {
    return (
      <>
        <div className="list-group">
          {petUser.map((item) => (
            <button
              className="list-group-item list-group-item-action"
              data-bs-toggle="modal"
              data-bs-target="#modalPets"
              onClick={openPet}
              key={item.name}
            >
              {item.name}
              {/* <button type="button" class="btn-close float-end" aria-label="Close"></button> */}
            </button>
          ))}
        </div>
        <MyPetsDashboard
          petSelected={petToSend}
          setPetSelected={setpetToSend}
          petUser={petUser}
          setPetUser={setPetUser}
          docUser={docUser}
        />
        <PetModal
          pet={petToSend}
          petUser={petUser}
          setPetUser={setPetUser}
          docUser={docUser}
        />
      </>
    );
  } else if (
    petUser !== undefined &&
    petUser !== null &&
    petUser.length === 0 &&
    docUser !== undefined &&
    docUser !== null &&
    docUser.pets !== undefined &&
    docUser.pets !== null &&
    docUser.pets.some((p) => p !== null || p !== undefined)
  ) {
    return (
      <div>
        <p>
          Obteniendo información de tus mascotas, esta se mostrara
          automaticamente!
        </p>
      </div>
    );
  } else if (docUser === undefined || docUser === null) {
    return (
      <div>
        <p>Cargando información personal, esta se mostrara automaticamente!</p>
      </div>
    );
  }
  return (
    <div>
      <p>¿No tienes ninguna mascota agregada, quieres agregar alguna?</p>
      <MyPetsDashboard
        petSelected={petToSend}
        setPetSelected={setpetToSend}
        petUser={petUser}
        setPetUser={setPetUser}
        docUser={docUser}
      />
      <PetModal
        pet={null}
        petUser={petUser}
        setPetUser={setPetUser}
        docUser={docUser}
      />
    </div>
  );
};

const MyPetsDashboard = (props) => {
  const { petSelected, setPetSelected, petUser, setPetUser, docUser } = props;
  const sendNewPet = () => {
    debugger;
    setPetSelected(null);
  };

  debugger;
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
      </div>
    </>
  );
};

const PetModal = (props) => {
  const { pet, petUser, setPetUser, docUser } = props;
  debugger;
  const [petAdd, setPetAdd] = React.useState(PetJson);
  const [petImgs, setPetImgs] = useState([]);
  useEffect(() => {
    debugger;
    if (pet !== undefined && pet !== null) {
      setPetAdd(pet);
      setPetImgs(pet.images);
    } else {
      setPetAdd(PetJson);
      setPetImgs([]);
    }
  }, [pet]);

  useEffect(() => {
    debugger;
    setPetAdd({
      ...petAdd,
      images: petImgs,
    });
  }, [petImgs]);

  const onChangePet = (e) => {
    const objTarget = e.target;
    const getValue = objTarget.value;
    if (objTarget.name === "petType") {
      setPetAdd({ ...petAdd, type: getValue });
    } else if (objTarget.name === "petName") {
      setPetAdd({ ...petAdd, name: getValue });
    } else if (objTarget.name === "petsurName") {
      setPetAdd({ ...petAdd, surName: getValue });
    } else if (objTarget.name === "petAge") {
      setPetAdd({ ...petAdd, age: getValue });
    }
  };

  const savePet = async (e) => {
    debugger;
    e.preventDefault();
    petAdd.owner = docUser.id;
    if (petUser === undefined || petUser === null) {
      // let arrayPets = [];
      // arrayPets.push(petAdd);
      // setPetUser(arrayPets);
      setPetUser((oldPets) => [...oldPets, petAdd]);
    } else {
      // let arrayPets = doc.pets;
      // arrayPets.push(petAdd);
      // setPetUser(arrayPets);
      // setPetUser({ ...petUser, petUser: arrayPets });
      setPetUser((oldPets) => [...oldPets, petAdd]);
    }
    console.log(petAdd);
  };

  const deletePet = async (e) => {
    debugger;
    e.preventDefault();
    if (petUser === undefined || petUser === null) {
      setPetUser((oldPets) => oldPets.filter((data) => data.id === petAdd.id));
      // previousEmployeeData => previousEmployeeData.filter(data)=> data.id != employeeId )
    }
    console.log(petAdd);
  };

  return (
    <>
      <Modal
        title="Mis mascotas"
        modalName="modalPets"
        childrenFooter={
          <ModalBtn
            save={savePet}
            clearObj={pet !== undefined && pet !== null ? deletePet : undefined}
          />
        }
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
            placeholder={"Nombre.."}
            required
          />
          <label>Apellido</label>
          <input
            type="string"
            name="petsurName"
            className="form-control"
            onChange={onChangePet}
            value={petAdd.surName}
            placeholder={"Apellido o Hogar"}
            required
          />
          <label>Edad</label>
          <input
            type="number"
            name="petAge"
            className="form-control"
            onChange={onChangePet}
            value={petAdd.age}
            placeholder={"Edad.."}
            required
          />
          <label>Imagenes</label>
          {/* <div className="list-group list-group-flex"> */}
          <UploadImage
            imageUpload={petImgs}
            setImageUpload={setPetImgs}
            internalArray={petAdd.images}
            arrayResult={true}
          />
          {/* </div> */}
        </fieldset>
      </Modal>
    </>
  );
};

const ModalBtn = (props) => {
  const { save, clearObj } = props;

  if (clearObj !== undefined) {
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
        <button
          type="button"
          className="btn btn-danger"
          data-bs-dismiss="modal"
          onClick={clearObj}
        >
          Eliminar
        </button>
      </>
    );
  }
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

function findArrayElementByName(array, name) {
  return array.find((element) => {
    return element.name === name;
  });
}

const ImgUpload = (props) => {
  const { src, isArray } = props;
  debugger;
  if (src !== undefined && src !== null) {
    return (
      <>
        <img
          className={
            isArray
              ? "list-group-item list-group-item-action list-group-item-flex"
              : "img-upload"
          }
          src={src}
          alt="Pet"
        ></img>
      </>
    );
  } else {
    return (
      <>
        <FaRegUser className="img-upload" />
      </>
    );
  }
};

function UploadImage(props) {
  const { imageUpload, setImageUpload, arrayResult } = props;
  const [logoUrl, setLogoUrl] = useState(InsertFile);

  return (
    <>
      {/* <h4 className="form-edit">Agregar Imagen</h4> */}
      <UploadImage_Response
        imageUpload={imageUpload}
        setImageUpload={setImageUpload}
        arrayResult={arrayResult}
        logoUrl={logoUrl}
      />
    </>
  );
}

const UploadImage_Response = (props) => {
  const { imageUpload, setImageUpload, arrayResult, logoUrl } = props;

  const onDrop = useCallback(
    (acceptedFiles) => {
      debugger;
      const file = acceptedFiles[0];
      var fileTosave = {
        // file: file,
        name: file.name,
        preview: URL.createObjectURL(file),
      };
      if (arrayResult) {
        setImageUpload((arrImages) => [...arrImages, fileTosave]);
      } else {
        setImageUpload(fileTosave);
      }
    },
    [setImageUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    onDrop,
  });
  debugger;
  if (arrayResult && imageUpload.length > 0) {
    return (
      <>
        <div className="upload-logo" {...getRootProps()}>
          <input {...getInputProps()} />
          <div className="list-group list-group-flex">
            <ImgUpload src={logoUrl ? logoUrl : undefined} isArray />
            {imageUpload.map((image) =>
              isDragActive ? (
                <ImgUpload
                  key={image.name}
                  src={image.preview !== undefined ? image.preview : undefined}
                  isArray
                />
              ) : (
                <ImgUpload
                  key={image.name}
                  src={image.preview !== undefined ? image.preview : undefined}
                  isArray
                />
              )
            )}
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="upload-logo" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <ImgUpload />
        ) : (
          <ImgUpload src={logoUrl ? logoUrl : undefined} />
        )}
      </div>
    </>
  );
};

export default MyPets;
