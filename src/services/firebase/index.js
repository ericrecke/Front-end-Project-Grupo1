import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey:'AIzaSyB8Loqws5uDTkF2GGqJM5Sstn3LUCHZBkI',
  authDomain: 'proyectomascotas-fbf7c.firebaseapp.com',
  projectId: 'proyectomascotas-fbf7c',
  storageBucket: 'proyectomascotas-fbf7c.appspot.com',
  messagingSenderId: '94810630663',
  appId:'web:d90fefb1bf8998367a18a2',
  measurementId: 'G-85MCC6VFWB',
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const firestoreDB= getFirestore(app)
