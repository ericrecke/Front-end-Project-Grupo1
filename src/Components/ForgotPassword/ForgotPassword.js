import './ForgotPassword.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { languages } from '../../language';

const _language  = languages['es'];

function ForgotPassword() {
    function handleSubmitForgotPassword(){
        console.log("Presionó recuperar contraseña...")
    }

    return (
      <div className="ForgotPassword">
        <div className="container">
            <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card my-5">
                <form className="card-body cardbody-color p-lg-5">
                    <h2 className="text-center text-dark">{_language.FORGOT_PASSWORD.RECOVERY_PASSWORD}</h2>
                    <div className="text-center">
                        <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3" width="200px" alt="profile"></img>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="Mail" aria-describedby="emailHelp" placeholder="Mail"></input>
                    </div>
                    <div className="text-center">
                        <button onClick={handleSubmitForgotPassword()} className="btn btn-primary px-5 mb-5 w-100">{_language.FORGOT_PASSWORD.RECOVERY_PASSWORD}</button>
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