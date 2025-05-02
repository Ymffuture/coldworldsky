// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: visitKey,
  authDomain: visitauthDomain,
  projectId: visitproId,
  storageBucket: visitStoreBucket,
  messagingSenderId: visitmessaSendId,
  appId: visitAppId,
  measurementId: MeasurementIdvisit
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
