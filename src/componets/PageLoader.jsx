import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const colors = ['#1E90FF', '#FFD700', '#32CD32']; // Tesla-inspired tones

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000', // Tesla black
        zIndex: 9999,
        flexDirection: 'column',
      }}
    >
      <div className="d-flex gap-3 mb-4">
        {colors.map((color, index) => (
          <motion.div
            key={index}
            style={{
              width: 16,
              height: 16,
              borderRadius: '50%',
              backgroundColor: color,
              boxShadow: `0 0 15px ${color}`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              delay: index * 0.3,
            }}
          />
        ))}
      </div>
      <motion.span
        style={{
          color: '#FFFFFF',
          fontFamily: 'Arial Black, sans-serif',
          fontSize: '1rem',
          letterSpacing: '0.2em',
          textShadow: '0 0 10px #1E90FF',
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading...
      </motion.span>
    </div>
  );
};

export default Loader;

