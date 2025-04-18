import React from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URL_BACKEND_HTTPS } from '../../Urls.js';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
});

const SubscribePage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${URL_BACKEND_HTTPS}/api/auth/subscribe`, data);
      toast.success(res.data.message || 'Subscribed successfully!');
      reset();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Subscription failed.');
    }
  };

  return (
    <Container className="p-4 mt-3 rounded shadow" style={{ backgroundColor: '#f0f8ff' }}>
      <ToastContainer position="top-right" autoClose={5000} />
      <h4 className="mb-3 text-primary">Stay Updated with Quorvex</h4>
      <p className="text-muted mb-4">Enter your email to receive our latest updates.</p>

      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="you@example.com"
            {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </Form.Group>

        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </Form>
    </Container>
  );
};

export default SubscribePage;

