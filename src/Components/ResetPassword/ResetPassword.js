import './ResetPassword.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function ResetPassword() {
    return (
      <div className="ResetPassword">
        <div className="container">
            <div className="row">
            <div className="col-md-6 offset-md-3">
                <h2 className="text-center text-dark mt-5">Recuperar constraseña</h2>
                <div className="text-center mb-5 text-dark">Ingrese su mail para recuperarla.</div>
                <div className="card my-5">
                <form className="card-body cardbody-color p-lg-5">
                    <div className="text-center">
                        <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3" width="200px" alt="profile"></img>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="Mail" aria-describedby="emailHelp" placeholder="Mail"></input>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary px-5 mb-5 w-100">Recuperar</button>
                    </div>
                    <div id="emailRegister" className="form-text text-center text-dark">¿No estás registrado? 
                        <t> </t><a href="#" className="text-dark fw-bold">Crear cuenta</a>
                    </div>
                    <div id="emailLogin" className="form-text text-center text-dark">¿Ya estás registrado? 
                        <t> </t><a href="#" className="text-dark fw-bold">Ingresar</a>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default ResetPassword;