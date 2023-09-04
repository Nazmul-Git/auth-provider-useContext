// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO-bVysCEWTZNDXTxEXQKyZf7zrVyf7hQ",
  authDomain: "authfb-context-tailwinddaisyui.firebaseapp.com",
  projectId: "authfb-context-tailwinddaisyui",
  storageBucket: "authfb-context-tailwinddaisyui.appspot.com",
  messagingSenderId: "227747144145",
  appId: "1:227747144145:web:74744ffe179812c312c0f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;