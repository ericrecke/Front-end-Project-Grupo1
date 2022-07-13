import { initializeApp } from "firebase/app";
import {
  getFirestore,
  enableMultiTabIndexedDbPersistence,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey:'AIzaSyB8Loqws5uDTkF2GGqJM5Sstn3LUCHZBkI',
//   authDomain: 'proyectomascotas-fbf7c.firebaseapp.com',
//   projectId: 'proyectomascotas-fbf7c',
//   storageBucket: 'proyectomascotas-fbf7c.appspot.com',
//   messagingSenderId: '94810630663',
//   appId:'web:d90fefb1bf8998367a18a2',
//   measurementId: 'G-85MCC6VFWB',
// };

// const app = initializeApp(firebaseConfig);
// export const auth=getAuth(app)
// export const firestoreDB= getFirestore(app)

/*
CONFIGURACIÓN DE ERIC
*/

const firebaseConfig = {
  apiKey: "AIzaSyB28-EvahRxlojEJKh9AZkgMw1oIGGupgY",
  authDomain: "front-end-project-group1.firebaseapp.com",
  projectId: "front-end-project-group1",
  storageBucket: "front-end-project-group1.appspot.com",
  messagingSenderId: "634463972369",
  appId: "1:634463972369:web:515906789b30f9913c55b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestoreDB = getFirestore(app);
const firestorage = getStorage(app);

enableMultiTabIndexedDbPersistence(firestoreDB);

export { auth, firestoreDB, firestorage };

/*
CONFIGURACIÓN DE ERIC
*/
