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
