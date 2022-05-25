// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeL4qCSlu6Pe_DK3H4DYfb8bwLdwFieCU",
  authDomain: "bike-parts-manufacture.firebaseapp.com",
  projectId: "bike-parts-manufacture",
  storageBucket: "bike-parts-manufacture.appspot.com",
  messagingSenderId: "408528053959",
  appId: "1:408528053959:web:217aa2f0975e40a9c700e2",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
