// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ-ReFJ6TkcXMr72yE-68F6a_rTeEVINY",
  authDomain: "login-and-register-97aa0.firebaseapp.com",
  projectId: "login-and-register-97aa0",
  storageBucket: "login-and-register-97aa0.firebasestorage.app",
  messagingSenderId: "412857256874",
  appId: "1:412857256874:web:ca4090f9fbffdb2143b9d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;