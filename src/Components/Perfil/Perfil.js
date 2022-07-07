import React, { useContext } from "react";
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
const Perfil = () => {
  debugger;
  const { lang } = useContext(ThemeContext);
  const _language = languages[lang];
  const { user } = useAuth();
  debugger;
  console.log(user);
  if (user !== undefined && user !== null) {
    return (
      <div className={"container container-web"}>
        <div className="card card-web">
          <div className="card-body">
            <div className="container-perfil">
              <ImgPerfil photoURL={user.photoURL} />
              <form
                autoComplete="off"
                className="form-group container-perfil__text"
              >
                <h5 className="card-title card-title-web">
                  {/* {_language.PERFIL.TITLE} */}
                  Perfil del Usuario
                </h5>
                <label htmlFor="string">{_language.PERFIL.INPUT_NAME}</label>
                <input
                  type="string"
                  className="form-control"
                  placeholder={_language.LOGIN.INPUT_PLACEHOLDER_NAME}
                  required
                  value={user.displayName}
                  disabled={user.displayName !== undefined ? true : false}
                />
                <label htmlFor="email">{_language.PERFIL.INPUT_EMAIL}</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder={_language.PERFIL.INPUT_PLACEHOLDER_EMAIL}
                  required
                  value={user.email}
                  disabled
                />
                <label htmlFor="select">{_language.PERFIL.PETS}</label>
                <div className="buttonsConfirm">
                  <button type="submit" className="btnConf">
                    {/* {_language.PERFIL.CONFIRM} */}
                    Guardar Cambios
                  </button>
                </div>
              </form>
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
      <img className="cat cat-home container-perfil__image" src={photoURL} alt="Perfil">
      </img>
    );
  }
  return (
    <>
      <FaRegUser className="cat cat-home container-perfil__image" />
    </>
  );
};

export default Perfil;
