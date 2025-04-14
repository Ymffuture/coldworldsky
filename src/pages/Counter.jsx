import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Counter = () => {
<<<<<<< HEAD
  const [count, setCount] = useState(999);
=======
  const [count, setCount] = useState(null);
>>>>>>> 45631415fad04d8067dab84e8265c909714a9fc5

  useEffect(() => {
    const fetchCount = async () => {
      const counterRef = doc(db, "stats", "pageVisits");

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
