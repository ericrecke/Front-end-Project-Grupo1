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
      INPUT_PLACEHOLDER_EMAIL: "Write Your Email Here",
      INPUT_PLACEHOLDER_PASS: "Write Your Password",
    },

    REGISTER: {
      HEADING_REGISTER: "Register",
      INPUT_PLACEHOLDER_NAME: "Write Your Name Here",
      INPUT_PLACEHOLDER_EMAIL: "Write Your Email Here",
      INPUT_PLACEHOLDER_PASS: "Write Your Password",
    },

    FORGOT_PASSWORD: {
      HEADING_FORGOT_PASSWORD: "Forgot Password",
      INPUT_PLACEHOLDER_EMAIL: "Write Your Email Here",
    },

    NAVBAR: {
      NAVBAR_HOME: "Home",
      NAVBAR_LOGIN: "Login",
      NAVBAR_REGISTER: "Register",
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
    },
  },
  es: {
    LOGIN: {
      HEADING_LOGIN: "Login",
      INPUT_PLACEHOLDER_EMAIL: "Ecribe tu Email aqui",
      INPUT_PLACEHOLDER_PASS: "Escribe tu contraseña",
    },

    REGISTER: {
      HEADING_REGISTER: "Registrarse",
      INPUT_PLACEHOLDER_NAME: "Ecribe tu Nombre aqui",
      INPUT_PLACEHOLDER_EMAIL: "Ecribe tu Email aqui",
      INPUT_PLACEHOLDER_PASS: "Escribe tu contraseña",
    },

    FORGOT_PASSWORD: {
      HEADING_FORGOT_PASSWORD: "Olvidaste tu Contraseña",
      INPUT_PLACEHOLDER_EMAIL: "Ecribe tu Email aqui",
    },

    NAVBAR: {
      NAVBAR_HOME: "Inicio",
      NAVBAR_LOGIN: "Login",
      NAVBAR_REGISTER: "Registrarse",
      NAVBAR_CONTACT: "Contacto",
    },

    CONTACT: {
      HEADING_CONTACT: "Contactanos",
      INPUT_PLACEHOLDER_EMAIL: "Escribe tu email aqui",
      INPUT_PLACEHOLDER_NAME: "Escribe tu nombre",
      INPUT_PLACEHOLDER_MESSAGE: "Escribe tu mensaje",
    },

    HOME: {
      HEADING_WELCOME: "Bienvenido ",
      MESSAGE: "Esta es una demo del sitio web.",
    },

    PERFIL: {
      HEADING_PERFIL: "Perfil ",
      INFORMATION_PERFIL: "Información acerca del usuario",
    },
  },
};
