// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-ce1ed.firebaseapp.com",
  projectId: "blog-app-ce1ed",
  storageBucket: "blog-app-ce1ed.appspot.com",
  messagingSenderId: "311112126027",
  appId: "1:311112126027:web:af8a9ccb8b02c6b0d087ce",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);