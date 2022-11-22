// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrj9yqXECOXFVSVwitUrZ-L0DhQgtn8VM",
  authDomain: "dog-wizardry.firebaseapp.com",
  projectId: "dog-wizardry",
  storageBucket: "dog-wizardry.appspot.com",
  messagingSenderId: "103870474880",
  appId: "1:103870474880:web:cfbf30b4131f578c41d465",
  measurementId: "G-G2NND6WF2Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
