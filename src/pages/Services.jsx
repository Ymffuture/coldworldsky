import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaBookReader,
  FaChalkboardTeacher,
  FaGlobe,
} from "react-icons/fa";
import axios from "axios";
import { useSpring, animated } from "@react-spring/web";
import "bulma/css/bulma.min.css";

const Services = () => {
  const [data, setData] = useState(null);

  const introFade = useSpring({
    from: { opacity: 0, transform: "translateY(-30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 200,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios.get("http://localhost:7411/server/api/data");
        setData(results.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="services-page1">
      {/* Hero Section */}
      <section className="hero is-info is-fullheight-with-navbar">
        <div className="hero-body has-text-centered">
          <div className="container">
            <animated.h1 style={introFade} className="title is-1 has-text-white">
              Our <span className="has-text-warning">Services</span>
            </animated.h1>
            <Link to="/find-a-tutor" className="button is-warning is-rounded is-medium mt-4">
              Find a Tutor
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section has-background-light">
        <div className="container">
          <h2 className="title is-3 has-text-primary has-text-centered">
            What We Offer at Quorvex
          </h2>
          <p className="subtitle is-6 has-text-centered mb-6">
            At <strong>Quorvex</strong>, we offer a range of services to empower
            both learners and educators. Our approach blends innovative
            technology with expert guidance.
          </p>

          <div className="columns is-multiline">
            {[
              {
                icon: <FaLaptopCode size={50} />,
                title: "Coding Classes",
                desc: "Comprehensive courses designed to build modern programming skills for the digital age.",
              },
              {
                icon: <FaBookReader size={50} />,
                title: "Academic Tutoring",
                desc: "Personalized tutoring sessions that help students excel in subjects ranging from math to science.",
              },
              {
                icon: <FaChalkboardTeacher size={50} />,
                title: "Workshops & Seminars",
                desc: "Interactive sessions focused on skill development, leadership, and innovation.",
              },
              {
                icon: <FaGlobe size={50} />,
                title: "Online Resources",
                desc: "A vast collection of digital resources, tutorials, and e-learning tools available anytime.",
              },
            ].map((service, idx) => (
              <div key={idx} className="column is-half">
                <div className="box is-shadowless is-flex is-align-items-flex-start is-gap-4">
                  <div className="icon is-large has-text-primary mr-4">{service.icon}</div>
                  <div>
                    <h3 className="title is-5">{service.title}</h3>
                    <p className="has-text-grey-dark">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional dynamic data preview (admin only maybe) */}
          {/* {data && (
            <div className="mt-6">
              <h5 className="title is-6">Server Data Preview:</h5>
              <pre className="box has-background-white-ter">{JSON.stringify(data, null, 2)}</pre>
            </div>
          )} */}
        </div>
      </section>
    </main>
  );
};

export default Services;
