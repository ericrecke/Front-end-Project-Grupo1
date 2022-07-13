import './ForgotPassword.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { languages } from '../../language';
import { useFormInput, isInvalidEmail } from '../utils/forms';

const _language = languages['es'];
const urlImagen = 'https://img.freepik.com/foto-gratis/disparo-vertical-gracioso-golden-retriever-sobre-fondo-verde_181624-29428.jpg?t=st=1652478823~exp=1652479423~hmac=3157ab2ab981c7f4778aa444cb8ca9d6a588aed47a4cf2bdb79e067b2630bdd2&w=740'

function ForgotPassword(props) {

    const email = useFormInput('');

    const handleSubmitForgotPassword = () => {
        
        // console.log("Presionó recuperar contraseña...")

        if (isInvalidEmail(email.value)){
            alert(_language.FORGOT_PASSWORD.NOT_VALID_EMAIL);
        }

        //TODO: Lógica para enviar link al mail
    }

    return (
        <div className="ForgotPassword">
          <div className="container">
              <div className="row">
              <div className="col-md-6 offset-md-3">
                  <div className="card my-5">
                  <form className="background-forgot-password card-body cardbody-color p-lg-5">
                      <h2 className="text-center text-dark">{_language.FORGOT_PASSWORD.RECOVERY_PASSWORD}</h2>
                      <div className="text-center">
                          <img src={urlImagen} className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3" width="200px" alt="profile"></img>
                      </div>
                      <div className="mb-3">
                          <input className="form-control" {...email} aria-describedby="emailHelp" placeholder={_language.FORGOT_PASSWORD.INPUT_PLACEHOLDER_EMAIL}></input>
                      </div>
                      <div className="text-center">                       
                          <button onClick={handleSubmitForgotPassword} className="btn btn-primary forgot-password-button px-5 mb-3 w-100">{_language.FORGOT_PASSWORD.RECOVERY_PASSWORD}</button>
                      </div>
                      <div id="emailRegister" className="form-text text-center text-dark">{_language.REGISTER.ARENT_YOU_REGISTER}&nbsp; 
                          <a href="#" className="text-dark fw-bold">{_language.REGISTER.SIGN_UP}</a>
                      </div>
                      <div id="emailLogin" className="form-text text-center text-dark">{_language.LOGIN.ARE_YOU_REGISTER}&nbsp;
                          <a href="#" className="text-dark fw-bold">{_language.LOGIN.SIGN_IN}</a>
                      </div>
                  </form>
                  </div>
              </div>
              </div>
          </div>
        </div>
      );
  }
  
  export default ForgotPassword;