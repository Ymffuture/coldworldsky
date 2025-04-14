import React from 'react';
import VideoA from '../../assets/vidmp4/PHYS/Understanding_Einsteins_Special_Theory_of_Relativity.mp4';

const VidPhys = () => {
  return (
    <div className="container py-5 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#F0F8FF' }}>
      <div className="card shadow-lg border-0" style={{ maxWidth: '720px', width: '100%', borderRadius: '1rem' }}>
        <div className="ratio ratio-16x9 rounded">
          <video controls className="w-100 h-100" style={{ borderRadius: '1rem' }}>
            <source src={VideoA} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title text-success fw-bold">Einstein's Special Theory of Relativity</h5>
          <p className="card-text text-muted">
            Dive into the fundamentals of one of physics' most groundbreaking theories with this insightful video.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VidPhys;
