import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const TermsOfService = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={8} className="mx-auto">
          <Card className="border-0 shadow-lg">
            <Card.Body>
              <Card.Title className="text-center mb-4 text-primary">
                Terms of Service
              </Card.Title>

              <p>
                Welcome to <strong>Quorvex</strong>. By accessing or using our platform, you agree to the following terms and conditions. Please read them carefully.
              </p>

              <h4>1. Acceptance of Terms</h4>
              <p>By accessing or using our website, you agree to comply with and be bound by these Terms of Service.</p>

              <h4>2. Use of Our Services</h4>
              <p>We grant you a limited, non-exclusive, non-transferable license to use our services for personal and non-commercial purposes.</p>

              <h4>3. User Responsibilities</h4>
              <p>As a user, you agree to:</p>
              <ul>
                <li>Provide accurate and truthful information.</li>
                <li>Not engage in any unlawful activities or disrupt the platform's services.</li>
                <li>Comply with all applicable laws and regulations.</li>
              </ul>

              <h4>4. Limitation of Liability</h4>
              <p>Quorvex shall not be held liable for any damages arising from the use of the website or the services provided.</p>

              <h4>5. Privacy and Data Protection</h4>
              <p>Our privacy practices are outlined in our <a href="/privacy-policy">Privacy Policy</a>, which you agree to when using our services.</p>

              <h4>6. Changes to Terms</h4>
              <p>We reserve the right to update or modify these terms at any time. You will be notified of significant changes, and continued use of the platform after changes indicates your acceptance of the new terms.</p>

              <h4>7. Termination</h4>
              <p>We may suspend or terminate your access to our services for violations of these Terms of Service.</p>

              <h4>Contact Information</h4>
              <p>If you have any questions regarding these Terms of Service, please contact us at:</p>
              <p>Email: <a href="mailto:quorvexinstitute@gmail.com">quorvexinstitute@gmail.com</a></p>
              <p>Phone: 065-393-5339</p>

              <div className="text-center mt-4">
                <Button variant="primary" href="/">
                  Go Back to Homepage
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsOfService;

