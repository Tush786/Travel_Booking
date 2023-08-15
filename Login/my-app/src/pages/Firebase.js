// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_26PPSwnGMVL3bABrqk8XM-wUv18w-Aw",
  authDomain: "travellogin-13300.firebaseapp.com",
  projectId: "travellogin-13300",
  storageBucket: "travellogin-13300.appspot.com",
  messagingSenderId: "328789357453",
  appId: "1:328789357453:web:c373bc44f13ad3cfc183c4",
  measurementId: "G-989GZW93C6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth,app}