import React, { useEffect, useState } from "react";
import { app } from "./firebaseConfig";
import { getFirestore, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Counter = () => {
  const [count, setCount] = useState(null);
  const db = getFirestore(app); // ✅ initialize Firestore with the app

  useEffect(() => {
    const fetchCount = async () => {
      const counterRef = doc(db, "stats", "pageVisits"); // ✅ use Firestore instance

      try {
        const counterSnap = await getDoc(counterRef);
        if (counterSnap.exists()) {
          const currentCount = counterSnap.data().count;
          setCount(currentCount + 1);
          await updateDoc(counterRef, { count: currentCount + 1 });
          toast.success("Visitor count updated!");
        } else {
          await setDoc(counterRef, { count: 1 });
          setCount(1);
          toast.info("Counter initialized for the first time!");
        }
      } catch (error) {
        console.error("Error updating counter:", error);
        toast.error("Failed to update visit counter.");
      }
    };

    fetchCount();
  }, []);

  return (
    <div className="count">
      <p>
        {count !== null ? (
          <>This website has been visited <b>{count}</b> times.</>
        ) : (
          <>Loading...</>
        )}
      </p>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Counter;

