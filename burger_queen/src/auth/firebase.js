// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqSF7RgqXxuyG24TwQcvUenb9vaLlrIVA",
  authDomain: "burger-queen-vicky.firebaseapp.com",
  projectId: "burger-queen-vicky",
  storageBucket: "burger-queen-vicky.appspot.com",
  messagingSenderId: "741520703562",
  appId: "1:741520703562:web:74bba56fb56538cb87a6b3",
  measurementId: "G-0DXHN7ZP6H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)