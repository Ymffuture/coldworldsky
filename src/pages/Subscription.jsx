// src/pages/SubscribePage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import {URL_BACKEND_HTTPS} from '../../Urls.js'

const SubscribePage = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState("hi");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${URL_BACKEND_HTTPS}/api/auth/subscribe`, { email });
      setStatus({ type: 'success', message: res.data.message });
      setEmail('');
    } catch (err) {
      setStatus({ type: 'danger', message: err.response?.data?.message || 'Error occurred' });
    }
  };

  return (
    <Container>
      <p>Enter your email to receive the latest updates from Quorvex.</p>
      {status && <Alert variant={status.type}>{status.message}</Alert>}
      <Form onSubmit={handleSubscribe}>
        <Form.Group className="mb-0">
          <Form.Control
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">Subscribe</Button>
      </Form>
    </Container>
  );
};

export default SubscribePage;

