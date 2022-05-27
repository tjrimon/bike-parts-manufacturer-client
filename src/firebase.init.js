// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcuVOS0FzEap52C49vvPxfKVekyym5ShQ",
  authDomain: "bike-manufacture-tjrimon.firebaseapp.com",
  projectId: "bike-manufacture-tjrimon",
  storageBucket: "bike-manufacture-tjrimon.appspot.com",
  messagingSenderId: "344182807389",
  appId: "1:344182807389:web:d44d90929f0ee21fcc26b4"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
