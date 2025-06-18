import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaLaptopCode, FaDatabase, FaPaintBrush } from "react-icons/fa";
import axios from "axios";
import {Helmet} from "react-helmet" ;
import "bulma/css/bulma.min.css";
const Courses = () => {
  const [images, setImages] = useState({
    webDev: null,
    dataScience: null,
    uiUx: null,
  });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const [web, data, ui] = await Promise.all([
          axios.get("https://api.unsplash.com/photos/random?query=web+development&client_id=vKvUZ1Wv3ez0cdcjK-d9KMB8_wPVRLNQaC2P8FVssaw"),
          axios.get("https://api.unsplash.com/photos/random?query=data+science&client_id=vKvUZ1Wv3ez0cdcjK-d9KMB8_wPVRLNQaC2P8FVssaw"),
          axios.get("https://api.unsplash.com/photos/random?query=ui+ux+design&client_id=vKvUZ1Wv3ez0cdcjK-d9KMB8_wPVRLNQaC2P8FVssaw"),
        ]);
        setImages({
          webDev: web.data.urls.regular,
          dataScience: data.data.urls.regular,
          uiUx: ui.data.urls.regular,
        });
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="section p-tags">
      <Helmet>
        <title>Courses</title>
      </Helmet>
      {/* Hero */}
      <section className="hero intro is-info is-bold is-medium">
        <div className="hero-body has-text-centered">
          <p className="title is-1">Courses</p>
          <p className="subtitle is-4">Empowering education through innovation and excellence.</p>
          <Link to="/find-a-tutor" className="button is-warning is-rounded is-medium mt-4">
            Find a Tutor
          </Link>
        </div>
      </section>

      {/* Notice */}
      <div className="notification is-warning has-text-centered mt-5">
        <strong>Note:</strong> We do <strong>not offer certificates</strong>. Our focus is on <strong>preparation for success</strong> at top coding schools, universities, and job-readiness programs.
      </div>

      {/* Courses */}
      <div className="container mt-6" style={{ color: '#333333' }}>
        <h2 className="title is-3 has-text-centered has-text-link mb-5">Explore Our Courses</h2>
        <p className="has-text-centered mb-6">
          Discover tech-focused programs designed to equip you with practical, in-demand skills. Select a path below to begin your journey.
        </p>

        <div className="columns is-multiline">
          {/* Web Dev */}
          <div className="column is-4">
            <Link to="/courses/web-dev" className="card is-clickable">
              {images.webDev && (
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={images.webDev} alt="Web Development" />
                  </figure>
                </div>
              )}
              <div className="card-content has-text-centered">
                <FaLaptopCode className="is-size-1 has-text-info mb-3" />
                <p className="title is-4">Web Development</p>
                <p>Master front-end and back-end dev using HTML, CSS, JavaScript, React, and more.</p>
              </div>
            </Link>
          </div>

          {/* Data Science */}
          <div className="column is-4">
            <Link to="/courses/data-science" className="card is-clickable">
              {images.dataScience && (
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={images.dataScience} alt="Data Science" />
                  </figure>
                </div>
              )}
              <div className="card-content has-text-centered">
                <FaDatabase className="is-size-1 has-text-success mb-3" />
                <p className="title is-4">Data Science</p>
                <p>Learn Python, data visualization, machine learning, and analytics.</p>
              </div>
            </Link>
          </div>

          {/* UI/UX Design */}
          <div className="column is-4">
            <Link to="/courses/ui-ux" className="card is-clickable">
              {images.uiUx && (
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={images.uiUx} alt="UI/UX Design" />
                  </figure>
                </div>
              )}
              <div className="card-content has-text-centered">
                <FaPaintBrush className="is-size-1 has-text-warning mb-3" />
                <p className="title is-4">UI/UX Design</p>
                <p>Design great experiences using tools like Figma, Adobe XD, and Framer.</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Nested Content */}
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Courses;

