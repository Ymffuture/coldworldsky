import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const colors = [ 'gray','#1E90FF', '#FFD700'];

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#F0F8FF',
        zIndex: 9999,
      }}
    >
      <div className="d-flex gap-2">
        {colors.map((color, index) => (
          <motion.div
            key={index}
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: color,
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: index * 0.5,
            }}
          />
        ))}
       
      </div>
      
    </div>
  );
};

export default Loader;
