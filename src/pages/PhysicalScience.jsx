import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { FaList, FaPlayCircle } from "react-icons/fa";

const PhysicalScience = () => {
  return (
    <Container as="main" className="py-5 subject-page physical-science">
      <h1 className="text-center mb-4 text-primary">Physical Sciences</h1>

      {/* Overview Section */}
      <section className="overview mb-5">
        <h2>Overview</h2>
        <p>
          Physical Sciences explore the laws that govern the physical universe. Learn topics in physics, chemistry, and astronomy through interactive content and engaging resources.
        </p>
        <a
          href="https://www.khanacademy.org/science/physics"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          aria-label="Explore Khan Academy's Physics section"
        >
          Explore Khan Academy Physics
        </a>
      </section>

      {/* Topics Section */}
      <section className="topics">
        <div className="topic mb-4">
          <h3>Chemistry</h3>
          <p>
            Discover atomic structure, bonding, and chemical reactions with guided simulations and virtual labs.
          </p>
          <a
            href="https://www.chemcollective.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
            aria-label="Visit ChemCollective for chemistry resources"
          >
            Visit ChemCollective
          </a>
        </div>

        <div className="topic mb-4">
          <h3>Physics & Astronomy</h3>
          <p>
            From Newton’s laws to black holes, explore the fascinating principles that shape our universe.
          </p>
          <a
            href="https://www.nasa.gov/audience/forstudents/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
            aria-label="Visit NASA Education for astronomy resources"
          >
            Visit NASA Education
          </a>
        </div>

        {/* Video & Clips */}
        <div className="clips my-4">
          <Link
            to="/tutoring/subjects/Physical-science/clip-overview"
            className="text-decoration"
            aria-label="Watch clip overview"
          >
            <FaPlayCircle /> Watch Overview Clip
          </Link>

          <hr />

          <details className="mt-3">
            <summary>
              <FaList /> Clip List
            </summary>
            <ul className="mt-2">
              <li>Theory of Relativity</li>
              <li>Periodic Table Introduction</li>
              <li>Gravitational Forces</li>
              <li>Radioactive Decay</li>
            </ul>
          </details>
        </div>
      </section>

      {/* Warm-Up Q&A */}
      <section className="qa-section mt-5">
        <h2>Warm-Up Questions & Answers</h2>

        <details className="mb-3">
          <summary><strong>Q: What is the difference between mass and weight?</strong></summary>
          <p>
            Mass is the amount of matter in an object, measured in kilograms (kg), while weight is the force exerted by gravity on that mass, measured in newtons (N).
          </p>
        </details>

        <details className="mb-3">
          <summary><strong>Q: Why do chemical reactions release or absorb energy?</strong></summary>
          <p>
            Because breaking bonds requires energy and forming new bonds releases energy. The difference determines whether the reaction is exothermic or endothermic.
          </p>
        </details>

        <details className="mb-3">
          <summary><strong>Q: What are Newton’s three laws of motion?</strong></summary>
          <p>
            1. Inertia – an object remains at rest or moves uniformly unless acted on. <br />
            2. Force = mass × acceleration (F = ma). <br />
            3. Action and reaction are equal and opposite.
          </p>
        </details>
      </section>

      <Outlet />

      {/* Breadcrumb Navigation */}
      <Breadcrumb className="my-4">
        <Breadcrumb.Item>
          <Link to="/tutoring/subjects/Mathematics">Mathematics</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/tutoring/subjects/Life-sciences">Life Sciences</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Physical Sciences</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
};

export default PhysicalScience;
