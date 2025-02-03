import React from "react";
import { Container } from "react-bootstrap";

const PhysicalScience = () => {
  return (
    <Container className="py-5 subject-page physical-science">
      <h1 className="text-center mb-4 text-primary">Physical Sciences</h1>
      <section className="overview mb-5">
        <h2>Overview</h2>
        <p>
          Physical Sciences cover the study of physics, chemistry, and earth sciences. Learn about the fundamental laws of nature, chemical reactions, and cosmic phenomena through interactive content and hands-on experiments.
        </p>
        <a
          href="https://www.khanacademy.org/science/physics"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Explore Khan Academy Physics
        </a>
      </section>
      <section className="topics">
        <div className="topic mb-4">
          <h3>Chemistry</h3>
          <p>
            Understand the composition of matter, chemical bonds, and reaction dynamics with engaging tutorials.
          </p>
          <a
            href="https://www.chemcollective.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            Visit ChemCollective
          </a>
        </div>
        <div className="topic mb-4">
          <h3>Physics & Astronomy</h3>
          <p>
            Discover the wonders of the universe, from fundamental physics concepts to the exploration of distant galaxies.
          </p>
          <a
            href="https://www.nasa.gov/audience/forstudents/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            Visit NASA Education
          </a>
        </div>
      </section>
    </Container>
  );
};

export default PhysicalScience;
