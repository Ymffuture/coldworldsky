import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={8} className="mx-auto">
          <Card className="border-0 shadow-lg">
            <Card.Body>
              <Card.Title className="text-center mb-4 text-primary">
                Privacy Policy
              </Card.Title>

              <p>
                At <strong>Quorvex</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
              </p>

              <h4>Information We Collect</h4>
              <p>We may collect the following types of information:</p>
              <ul>
                <li><strong>Personal Information:</strong> Such as name, email, phone number.</li>
                <li><strong>Usage Data:</strong> Details of your interactions with our platform, including your IP address, browser type, and pages visited.</li>
                <li><strong>Cookies:</strong> We use cookies to enhance your experience on our website.</li>
              </ul>

              <h4>How We Use Your Information</h4>
              <p>We use your information to:</p>
              <ul>
                <li>Provide our services and improve user experience.</li>
                <li>Communicate with you regarding updates and offers.</li>
                <li>Analyze usage patterns to enhance platform functionality.</li>
              </ul>

              <h4>Data Protection</h4>
              <p>We implement a variety of security measures to protect your personal information.</p>

              <h4>Your Rights</h4>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal data.</li>
                <li>Request correction of any inaccurate or incomplete information.</li>
                <li>Request the deletion of your data under certain circumstances.</li>
              </ul>

              <h4>Contact Us</h4>
              <p>If you have any questions regarding this Privacy Policy, feel free to contact us at:</p>
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

export default PrivacyPolicy;

