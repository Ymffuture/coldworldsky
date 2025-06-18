import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import "bulma/css/bulma.min.css";
import {Helmet} from "react-helmet" ;
const About = () => {
  const introFade = useSpring({
    from: { opacity: 0, transform: "translateY(-30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 200,
  });

  return (
    <>
      <Helmet>
        <title>About Us</title>
      </Helmet>
    
    <main className="about-page has-background-light">
      {/* Hero Section */}
      
      <section className="hero intro is-info is-fullheight-with-navbar">
        <div className="hero-body has-text-centered">
          <div className="container">
            <animated.h1 style={introFade} className="title is-1 has-text-white">
              About <span className="has-text-warning">Us</span>
            </animated.h1>
            <Link to="/find-a-tutor" className="button is-warning is-rounded is-medium mt-4">
              Find a Tutor
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">

          {/* Mission */}
          <div className="columns is-vcentered mb-6">
            <div className="column is-6">
              <h2 className="title is-3 has-text-primary">Our Mission</h2>
              <p className="is-size-5">
                At <strong>Quorvex</strong>, our mission is to transform education
                by making learning accessible and engaging. We strive to bridge
                the gap between traditional teaching and modern technology,
                empowering students to achieve academic and professional success.
              </p>
            </div>
            <div className="column is-6">
              <figure className="image is-4by3">
                <img
                  src="/img/mission.jpeg"
                  alt="Quorvex mission illustration"
                  className="is-rounded has-shadow"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>

          {/* Vision */}
          <div className="columns is-vcentered mb-6 is-flex-direction-row-reverse">
            <div className="column is-6">
              <h2 className="title is-3 has-text-primary">Our Vision</h2>
              <p className="is-size-5">
                We envision a future where education is personalized,
                interactive, and universally accessible. By continually
                innovating, <strong>Quorvex</strong> aims to lead in creating
                learning environments that foster growth, creativity, and
                lifelong curiosity.
              </p>
            </div>
            <div className="column is-6">
              <figure className="image is-4by3">
                <img
                  src="/img/about-01.jpg"
                  alt="Quorvex vision graphic"
                  className="is-rounded has-shadow"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>

          {/* Values */}
          <div className="content">
            <h2 className="title is-3 has-text-primary">Our Values</h2>
            <ul className="menu-list is-size-5">
              <li>
                <strong>Innovation</strong> – Embracing cutting-edge teaching methods and technology
              </li>
              <li>
                <strong>Excellence</strong> – Committing to high-quality education and continuous improvement
              </li>
              <li>
                <strong>Integrity</strong> – Operating with transparency, honesty, and fairness
              </li>
              <li>
                <strong>Inclusivity</strong> – Ensuring learning opportunities are accessible to everyone
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default About;
