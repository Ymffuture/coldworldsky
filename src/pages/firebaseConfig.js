<<<<<<< HEAD
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { messagingSenderId,storageBucket,projectId,measurementId,appId,authDomain,apiKey} from "../../Urls";


const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket:storageBucket,
    messagingSenderId: messagingSenderId,
    appId:appId,
    measurementId:measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
=======
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { messagingSenderId,storageBucket,projectId,measurementId,appId,authDomain,apiKey} from "../../Urls";


const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket:storageBucket,
    messagingSenderId: messagingSenderId,
    appId:appId,
    measurementId:measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
>>>>>>> 45631415fad04d8067dab84e8265c909714a9fc5
