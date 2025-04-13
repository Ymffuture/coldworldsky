import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

function ShapeExample() {
  return (
    <Container className="py-5">
      <Carousel fade interval={3000} controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/unisa.jpg"
            alt="UNISA"
            style={{ height: "300px", objectFit: "cover", borderRadius: "10px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/uj-1.jpg"
            alt="UJ"
            style={{ height: "300px", objectFit: "cover", borderRadius: "50%" }}
          />
        </Carousel.Item>
        {/* Add more slides as needed */}
      </Carousel>
    </Container>
  );
}

export default ShapeExample;
