import React from 'react';
import { FaBlog } from 'react-icons/fa';
import { Tooltip } from 'antd';
import { motion } from 'framer-motion';
import 'antd/dist/reset.css';
import 'bulma/css/bulma.min.css';

const SideButton = () => {
  return (
    <motion.div
      style={{
        position: 'fixed',
        right: '1rem',
        top: '25%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
      }}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Tooltip
        title="Visit Blog"
        placement="left"
        overlayInnerStyle={{ fontSize: '0.85rem' }}
        overlayStyle={{
          animation: 'fadeIn 0.5s ease-in-out',
        }}
      >
        <motion.a
          href="https://quorvexblog.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="button is-rounded"
          style={{
            backgroundColor: '#000',
            padding: '0.75rem',
            border: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          }}
          whileHover={{
            scale: [1, 1.1, 1],
            transition: { duration: 0.6, repeat: Infinity },
          }}
        >
          <FaBlog style={{ fontSize: '1.5rem', color: '#fff' }} />
        </motion.a>
      </Tooltip>
    </motion.div>
  );
};

export default SideButton;

