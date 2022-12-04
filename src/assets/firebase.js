import { initializeApp } from "firebase/app";
import {getFireStore, collection, addDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-37090-39b88.firebaseapp.com",
  projectId: "react-37090-39b88",
  storageBucket: "react-37090-39b88.appspot.com",
  messagingSenderId: "660377844727",
  appId: "1:660377844727:web:7ed711cd03d3c6daddccf2"
};

const app = initializeApp(firebaseConfig);

const db = getFireStore()

const cargarDB = () => {
    
}