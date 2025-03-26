import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

const Counter = () => {
  const [count, setCount] = useState(3991996);

  useEffect(() => {
    const fetchCount = async () => {
      const counterRef = doc(db, "stats", "pageVisits");

      try {
        const counterSnap = await getDoc(counterRef);
        if (counterSnap.exists()) {
          const currentCount = counterSnap.data().count;
          setCount(currentCount + 1);
          await updateDoc(counterRef, { count: currentCount + 1 });
        } else {
          await setDoc(counterRef, { count: 1 });
          setCount(1);
        }
      } catch (error) {
        console.error("Error updating counter:", error);
      }
    };
// npm install firebase

    fetchCount();
  }, []);

  return (
    <div className="count">
      This website has been visited <b>{count}</b> times.
    </div>
  );
};

export default Counter;
