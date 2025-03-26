import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCsMmBNamrfp44SXQ3ZGo1Wveg6KaabJqM",
    authDomain: "count-d740c.firebaseapp.com",
    projectId: "count-d740c",
    storageBucket: "count-d740c.firebasestorage.app",
    messagingSenderId: "271477235848",
    appId: "1:271477235848:web:3c9ba32a44230a2a32bf3d",
    measurementId: "G-M9GMPEKDH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
