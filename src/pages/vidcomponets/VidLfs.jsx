import React from 'react';
import VideoA from '../../assets/vidmp4/LFS/meiosis.mp4';

const VidLfs = () => {
  return (
    <section className="video-section py-5 px-3" style={{ backgroundColor: '#f4f8fb' }}>
      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold text-primary">Explore Meiosis</h2>
            <p className="text-muted">
              Dive into the world of Life Sciences with this visually explained, student-friendly video covering the process of Meiosis.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className="rounded-4 overflow-hidden shadow-lg border"
              style={{
                border: '5px solid #1E90FF',
                backgroundColor: '#fff',
              }}
            >
              <video
                className="w-100 h-auto"
                controls
                poster="https://img.freepik.com/free-photo/dna-structure-science-background_53876-115058.jpg" // Optional preview image
              >
                <source src={VideoA} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VidLfs;
