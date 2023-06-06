// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI-Ylr767zFcvNGoBpC8Tq6ZhRx178-RE",
  authDomain: "proyectofinaljsxaguilar.firebaseapp.com",
  projectId: "proyectofinaljsxaguilar",
  storageBucket: "proyectofinaljsxaguilar.appspot.com",
  messagingSenderId: "968376595928",
  appId: "1:968376595928:web:1bbed570196184f7f2eead"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app