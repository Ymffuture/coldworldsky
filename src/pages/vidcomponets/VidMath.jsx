import React from 'react';
import VideoA from '../../assets/vidmp4/math/Component 1 - Fractions.mp4';

const VidMath = () => {
  return (
    <div className="container py-5 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', background: '#F0F8FF' }}>
      <div className="card shadow-lg border-0" style={{ maxWidth: '720px', width: '100%', borderRadius: '1rem', backgroundColor: '#ffffff' }}>
        <div className="ratio ratio-16x9 rounded">
          <video controls className="w-100 h-100" style={{ borderRadius: '1rem' }}>
            <source src={VideoA} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title text-primary fw-bold">Learn Fractions - Math Video</h5>
          <p className="card-text text-secondary">Master the basics of fractions with this engaging and beginner-friendly video lesson.</p>
        </div>
      </div>
    </div>
  );
};

export default VidMath;
