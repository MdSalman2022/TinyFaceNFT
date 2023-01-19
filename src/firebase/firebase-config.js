// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOpUHx3g6ZoELxcjXzItISz3-wVrEPUIY",
    authDomain: "tinyfacenft.firebaseapp.com",
    projectId: "tinyfacenft",
    storageBucket: "tinyfacenft.appspot.com",
    messagingSenderId: "429275128794",
    appId: "1:429275128794:web:6e110a089fece4bdbdd6e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;