// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "feedflow-f5458.firebaseapp.com",
  projectId: "feedflow-f5458",
  storageBucket: "feedflow-f5458.firebasestorage.app",
  messagingSenderId: "1089667797064",
  appId: "1:1089667797064:web:f78e439164bfcfa535087d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);