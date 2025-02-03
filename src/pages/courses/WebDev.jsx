import React from "react";
import { Container } from "react-bootstrap";

const WebDev = () => {
  return (
    <Container className="py-5 subject-page web-dev">
      <h1 className="text-center mb-4 text-primary">Web Development</h1>
      <section className="overview mb-5">
        <h2>Overview</h2>
        <p>
          Web Development involves building and maintaining websites. It encompasses both front-end development (user interface and experience) and back-end development (server-side logic and database integration).
        </p>
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Learn Web Development on MDN
        </a>
      </section>
      <section className="topics">
        <div className="topic mb-4">
          <h3>Front-End Development</h3>
          <p>
            Create interactive, responsive interfaces using HTML, CSS, and JavaScript.
          </p>
          <a
            href="https://www.freecodecamp.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            Explore FreeCodeCamp
          </a>
        </div>
        <div className="topic mb-4">
          <h3>Back-End Development</h3>
          <p>
            Build robust server-side applications and manage databases using modern frameworks.
          </p>
          <a
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            Learn Node.js
          </a>
        </div>
      </section>
    </Container>
  );
};

export default WebDev;
