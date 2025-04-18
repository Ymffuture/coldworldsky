import React, { useEffect, useState } from 'react';

const LoaderScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 3000); // 3s loading
    return () => clearTimeout(timer);
  }, []);

  return (
    !fadeOut && (
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#F0F8FF',
          zIndex: 9999,
          opacity: fadeOut ? 0 : 1,
          transition: 'opacity 1.2s ease-in-out',
        }}
      >
        {/* 3D Rotating Cube */}
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '12px',
          background: 'linear-gradient(45deg, #1E90FF, #FFD700, #32CD32)',
          animation: 'spinCube 2s linear infinite',
        }} />

        {/* SVG Icon (Brain) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="none"
          stroke="#1E90FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginTop: 20, animation: 'pulse 2s infinite' }}
          viewBox="0 0 24 24"
        >
          <path d="M9 10c-1.5-1-2-3-1-4s3-1 4 1M15 10c1.5-1 2-3 1-4s-3-1-4 1" />
          <path d="M9 10v4m6-4v4M6 10c-1.5 1-2 3-1 4s3 1 4-1M18 10c1.5 1 2 3 1 4s-3 1-4-1" />
        </svg>

        <p style={{ marginTop: 10, color: '#32CD32' }}>Loading Quorvex Intelligence...</p>
      </div>
    )
  );
};

export default LoaderScreen;
