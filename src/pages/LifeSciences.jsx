import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { FaList, FaPlayCircle } from "react-icons/fa";

const LifeScience = () => {
  return (
    <Container as="main" className="py-5 subject-page life-science">
      <h1 className="text-center mb-4 text-primary">Life Sciences</h1>

      {/* Overview */}
      <section className="overview mb-5">
        <h2>Overview</h2>
        <p>
          Life Sciences explore living organisms—from microbiology and anatomy to ecosystems and evolution.
          Dive into the complexities of biology, sustainability, and environmental science with curated lessons and interactive tools.
        </p>
        <a
          href="https://www.khanacademy.org/science/biology"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          aria-label="Visit Khan Academy for Biology resources"
        >
          Explore Khan Academy Biology
        </a>
      </section>

      {/* Topics */}
      <section className="topics">
        <div className="topic mb-4">
          <h3>Human Anatomy</h3>
          <p>
            Explore the detailed structure and systems of the human body through interactive visuals and medical-grade diagrams.
          </p>
          <a
            href="https://www.innerbody.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
            aria-label="Explore InnerBody anatomy resources"
          >
            Explore InnerBody
          </a>
        </div>

        <div className="topic mb-4">
          <h3>Ecology & Environment</h3>
          <p>
            Learn how organisms interact with their environment and the importance of biodiversity, climate, and ecosystems.
          </p>
          <a
            href="https://www.nationalgeographic.org/education/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
            aria-label="Visit National Geographic Education site"
          >
            National Geographic Education
          </a>
        </div>

        {/* Video Links */}
        <div className="clips my-4">
          <Link
            to="/tutoring/subjects/Life-sciences/clip-overview"
            className="text-decoration"
            aria-label="Watch Life Sciences clip overview"
          >
            <FaPlayCircle /> Watch Overview Clip
          </Link>
          <hr />
          <details className="mt-3">
            <summary><FaList /> Clip List</summary>
            <ul className="mt-2">
              <li>DNA Molecules</li>
              <li>Cell Structures</li>
              <li>Human Body Systems</li>
              <li>Food Chains & Webs</li>
            </ul>
          </details>
        </div>
      </section>

      {/* Warm-Up Q&A */}
      <section className="qa-section mt-5">
        <h2>Warm-Up Questions & Answers</h2>

        <details className="mb-3">
          <summary><strong>Q: What is DNA and why is it important?</strong></summary>
          <p>
            DNA (deoxyribonucleic acid) is the molecule that contains genetic instructions for the development and function of living organisms. It's what makes you, you!
          </p>
        </details>

        <details className="mb-3">
          <summary><strong>Q: How do plants produce their own food?</strong></summary>
          <p>
            Through photosynthesis — plants use sunlight, carbon dioxide, and water to produce glucose (food) and oxygen.
          </p>
        </details>

        <details className="mb-3">
          <summary><strong>Q: What is the difference between a cell and a tissue?</strong></summary>
          <p>
            A cell is the basic unit of life, while tissues are groups of similar cells working together to perform a specific function.
          </p>
        </details>
      </section>

      <Outlet />

      {/* Breadcrumbs */}
      <Breadcrumb className="my-4">
        <Breadcrumb.Item>
          <Link to="/tutoring/subjects/Mathematics">Mathematics</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Life Sciences</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/tutoring/subjects/Physical-science">Physical Sciences</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
};

export default LifeScience;
