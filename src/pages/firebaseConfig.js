// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnwHd5fYLC_J46JIJmRrBOt2wBVw6CAbs",
  authDomain: "visitcount-6309d.firebaseapp.com",
  projectId: "visitcount-6309d",
  storageBucket: "visitcount-6309d.firebasestorage.app",
  messagingSenderId: "662672583632",
  appId: "1:662672583632:web:5f98b08c04ddb87acba7d5",
  measurementId: "G-TCG55F765Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
