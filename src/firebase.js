import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEl1JNa9k6jESTzTkFLCrI1mGltjgaG_4",
  authDomain: "clone-be76f.firebaseapp.com",
  projectId: "clone-be76f",
  storageBucket: "clone-be76f.appspot.com",
  messagingSenderId: "582873264560",
  appId: "1:582873264560:web:0e49d0c576fe92318e6675",
  measurementId: "G-KELGZXKRQ9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
