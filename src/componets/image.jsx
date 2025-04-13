import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

function ShapeExample() {
  return (
    <Container className="py-5">
      <Carousel fade controls={false} indicators={false} interval={4000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/unisa.jpg" // Use your image path here
            alt="UNISA"
            style={{
              height: "350px",
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
            }}
          />
          <Carousel.Caption>
            <h5 className="bg-dark bg-opacity-50 p-2 rounded">University of South Africa (UNISA)</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ShapeExample;
