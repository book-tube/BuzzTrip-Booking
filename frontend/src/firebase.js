// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkMT5mUrKNt5CXuQR5HPCbUu2iDLmPYxw",
    authDomain: "buzztrip-e54d9.firebaseapp.com",
    projectId: "buzztrip-e54d9",
    storageBucket: "buzztrip-e54d9.firebasestorage.app",
    messagingSenderId: "154391452666",
    appId: "1:154391452666:web:cd1b4dafa0d8116b51e243",
    measurementId: "G-VCLE9JJ9C3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);     
export const db = getFirestore(app); 