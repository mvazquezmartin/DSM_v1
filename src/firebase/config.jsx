// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfAtRzALRdOkdDJ57UcGK1IfEIWk9T8Vk",
  authDomain: "dsmbasededatos.firebaseapp.com",
  projectId: "dsmbasededatos",
  storageBucket: "dsmbasededatos.appspot.com",
  messagingSenderId: "126838534153",
  appId: "1:126838534153:web:007c0adaacaff80e6f08d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);