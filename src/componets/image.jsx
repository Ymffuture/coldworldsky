import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ShapeExample() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div
            style={{
              backgroundImage: "url('../img/unisa.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "350px",
              borderRadius: "20px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            }}
            role="img"
            aria-label="University of South Africa (UNISA)"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;
