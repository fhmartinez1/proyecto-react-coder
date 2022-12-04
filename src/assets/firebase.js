// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-37090-39b88.firebaseapp.com",
  projectId: "react-37090-39b88",
  storageBucket: "react-37090-39b88.appspot.com",
  messagingSenderId: "660377844727",
  appId: "1:660377844727:web:7ed711cd03d3c6daddccf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);