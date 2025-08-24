import React from "react";
import { motion } from "framer-motion";

const CircleLoader = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        position: "fixed",
        inset: 0, // shorthand for top:0, right:0, bottom:0, left:0
        backgroundColor: "#ffffff", // Google white background
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={{
          width: 60,
          height: 60,
          border: "6px solid #e0e0e0",
          borderTop: "6px solid #4285F4", // Google Blue
          borderRadius: "50%",
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default CircleLoader;


