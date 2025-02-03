import React from "react";
import { Container } from "react-bootstrap";

const LifeScience = () => {
  return (
    <Container className="py-5 subject-page life-science">
      <h1 className="text-center mb-4 text-primary">Life Sciences</h1>
      <section className="overview mb-5">
        <h2>Overview</h2>
        <p>
          Life Sciences explore the fascinating world of living organisms—from biology and ecology to human anatomy. Our content helps you understand the building blocks of life and the principles of health and sustainability.
        </p>
        <a
          href="https://www.khanacademy.org/science/biology"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Explore Khan Academy Biology
        </a>
      </section>
      <section className="topics">
        <div className="topic mb-4">
          <h3>Human Anatomy</h3>
          <p>
            Explore the intricate structure of the human body through detailed lessons and interactive 3D models.
          </p>
          <a
            href="https://www.innerbody.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            Explore InnerBody
          </a>
        </div>
        <div className="topic mb-4">
          <h3>Ecology & Environment</h3>
          <p>
            Understand the interdependence between organisms and their environment with our curated resources.
          </p>
          <a
            href="https://www.nationalgeographic.org/education/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            National Geographic Education
          </a>
        </div>
      </section>
    </Container>
  );
};

export default LifeScience;
