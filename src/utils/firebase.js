// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMK6Ee60V1Csw0mZyi2YaoaKnSVgQE37Q",
  authDomain: "swiggy-clone-d0106.firebaseapp.com",
  projectId: "swiggy-clone-d0106",
  storageBucket: "swiggy-clone-d0106.appspot.com",
  messagingSenderId: "156280151758",
  appId: "1:156280151758:web:4cde11519b513870a23a9f",
  measurementId: "G-0KBGQ0ZJ89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);