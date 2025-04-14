// src/pages/SubscribePage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const SubscribePage = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/subscribe', { email });
      setStatus({ type: 'success', message: res.data.message });
      setEmail('');
    } catch (err) {
      setStatus({ type: 'danger', message: err.response?.data?.message || 'Error occurred' });
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-primary">Subscribe for Updates</h2>
      <p>Enter your email to receive the latest updates from Quorvex.</p>
      {status && <Alert variant={status.type}>{status.message}</Alert>}
      <Form onSubmit={handleSubscribe}>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">Subscribe</Button>
      </Form>
    </Container>
  );
};

export default SubscribePage;

