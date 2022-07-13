// How to Implement it
// import { languages } from '../../language';
// We create the constant:     const _language  = languages['en'];
// We use it where we need it example:
//  <h2>{_language.LOGIN.HEADING_LOGIN}</h2>
// <input {...username} placeholder={_language.LOGIN.INPUT_PLACEHOLDER_EMAIL}></input><br></br>
// <input type="password" {...password} placeholder={_language.LOGIN.INPUT_PLACEHOLDER_PASS}></input><br></br>
//----------------------------------------------------------------------------------------
//---- To Do List on Language ---------
// Add more info about the panels, when they are created.
// Talk about how much languages we want to add to the website.
export const languages = {
  en: {
    LOGIN: {
      HEADING_LOGIN: "Login",
      INPUT_EMAIL: "Email",
      INPUT_PASS: "Password",
      INPUT_PLACEHOLDER_EMAIL: "Write Your Email Here",
      INPUT_PLACEHOLDER_PASS: "Write Your Password",
      ARE_YOU_REGISTER: "Have you an account?",
      SIGN_IN: "Sign in",
      FORGOT_PASSWORD: "¿Forgot your password?",
      SIGN_IN_GOOGLE: "SIGN IN WITH GOOGLE",
      NOTREGISTER: "You are not registered?",
      REGISTER: "REGISTER",
    },

    REGISTER: {
      HEADING_REGISTER: "Register",
      INPUT_EMAIL: "Email",
      INPUT_PASS: "Password",
      INPUT_PLACEHOLDER_NAME: "Write Your Name Here",
      INPUT_PLACEHOLDER_EMAIL: "Write Your Email Here",
      INPUT_PLACEHOLDER_PASS: "Write Your Password",
      ARENT_YOU_REGISTER: "Are you registered?",
      CREATE_ACCOUNT: "Create account",
      SIGN_UP: "Sign up",
    },

    FORGOT_PASSWORD: {
      HEADING_FORGOT_PASSWORD: "Forgot Password",
      INPUT_PLACEHOLDER_EMAIL: "Write Your Email Here",
      RECOVERY_PASSWORD: "Recovery password",
      NOT_VALID_EMAIL: "Not valid Email",
    },

    NAVBAR: {
      NAVBAR_INDEX: "Home",
      NAVBAR_PETS: "Pets",
      NAVBAR_PEOPLE: "People",
      NAVBAR_NEWS: "News",
      NAVBAR_CONTACT: "Contact",
    },

    CONTACT: {
      HEADING_CONTACT: "Contact Us",
      INPUT_PLACEHOLDER_EMAIL: "Write Your Email Here",
      INPUT_PLACEHOLDER_NAME: "Write Your Name",
      INPUT_PLACEHOLDER_MESSAGE: "Write Your Message",
    },

    HOME: {
      HEADING_WELCOME: "Welcome ",
      MESSAGE: "This is the demo of the website.",
    },

    PERFIL: {
      HEADING_PERFIL: "Perfil of (User)",
      INFORMATION_PERFIL: "Information About the User",
      INPUT_NAME: "Name: ",
      INPUT_EMAIL: "Email: ",
      INPUT_PLACEHOLDER_NAME: "Write a Name",
      INPUT_PLACEHOLDER_EMAIL: "Write a Email",
    },

    TOOLS: {
      HEADING: "Site Configuration",
      HEADING_THEME: "Choose your theme",
      HEADING_LANGUAGE: "Choose your language",
      HEADING_BACKGROUND: "Choose your background",
    },
  },
  es: {
    LOGIN: {
      HEADING_LOGIN: "Login",
      INPUT_EMAIL: "Email",
      INPUT_PASS: "Contraseña",
      INPUT_PLACEHOLDER_EMAIL: "Ecribe tu Email aquí",
      INPUT_PLACEHOLDER_PASS: "Escribe tu contraseña",
      ARE_YOU_REGISTER: "¿Ya estás registrado?",
      SIGN_IN: "Ingresar",
      FORGOT_PASSWORD: "Olvidaste tu contraseña?",
      SIGN_IN_GOOGLE: "Ingresar con Google",
      NOTREGISTER: "¿No estas registrado?",
      REGISTER: "Registrarse",
    },

    REGISTER: {
      HEADING_REGISTER: "Registrarse",
      INPUT_EMAIL: "Email",
      INPUT_PASS: "Contraseña",
      INPUT_PLACEHOLDER_NAME: "Escribe tu Nombre aquí",
      INPUT_PLACEHOLDER_EMAIL: "Escribe tu Email aquí",
      INPUT_PLACEHOLDER_PASS: "Escribe tu contraseña",
      ARENT_YOU_REGISTER: "¿No estás registrado?",
      CREATE_ACCOUNT: "Crear cuenta",
      SIGN_UP: "Registrarse",
    },

    FORGOT_PASSWORD: {
      HEADING_FORGOT_PASSWORD: "Olvidaste tu Contraseña",
      INPUT_PLACEHOLDER_EMAIL: "Escribe tu Email aquí",
      RECOVERY_PASSWORD: "Recuperar contraseña",
      NOT_VALID_EMAIL: "Email no válido",
    },

    NAVBAR: {
      NAVBAR_INDEX: "Inicio",
      NAVBAR_PETS: "Mascotas",
      NAVBAR_PEOPLE: "Personas",
      NAVBAR_NEWS: "Novedades",
      NAVBAR_CONTACT: "Contacto",
    },

    CONTACT: {
      HEADING_CONTACT: "Contactanos",
      INPUT_PLACEHOLDER_EMAIL: "Escribe tu email aquí",
      INPUT_PLACEHOLDER_NAME: "Escribe tu nombre",
      INPUT_PLACEHOLDER_MESSAGE: "Escribe tu mensaje",
    },

    HOME: {
      HEADING_WELCOME: "Bienvenido ",
      MESSAGE: "Esta es una demo del sitio web.",
    },

    PERFIL: {
      HEADING_PERFIL: "Perfil of (User)",
      INFORMATION_PERFIL: "Information About the User",
      INPUT_NAME: "Nombre: ",
      INPUT_EMAIL: "Email: ",
      INPUT_PLACEHOLDER_NAME: "Ingresar un Nombre",
      INPUT_PLACEHOLDER_EMAIL: "Ingresar un Email",
    },
    TOOLS: {
      HEADING: "Configuración del Sitio",
      HEADING_THEME: "Seleccione su tema",
      HEADING_LANGUAGE: "Seleccione su lenguaje",
      HEADING_BACKGROUND: "Seleccione su fondo",
    },
  },
};
