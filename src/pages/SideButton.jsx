// SideButton.jsx
import React from 'react';
import { FaBlog } from 'react-icons/fa';
import { Tooltip } from 'antd';
import { motion } from 'framer-motion';
import 'antd/dist/reset.css'; // Ant Design base styles
import 'bulma/css/bulma.min.css'; // Bulma

const SideButton = () => {
  return (
    <motion.div
      className="is-flex is-align-items-center"
      style={{
        position: 'fixed',
        left: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
      }}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Tooltip title="Visit Blog" placement="right">
        <a
          href="https://quorvexblog.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="button is-info is-rounded"
          style={{
            padding: '0.75rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            backgroundColor: '#1E90FF', // Lucky Rat blue
            border: 'none',
          }}
        >
          <FaBlog style={{ fontSize: '1.5rem', color: 'white' }} />
        </a>
      </Tooltip>
    </motion.div>
  );
};

export default SideButton;
