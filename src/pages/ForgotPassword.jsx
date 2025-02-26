import { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Link} from 'react-router-dom'
import { FaTimesCircle } from "react-icons/fa";

// Validation Schema using Yup
const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
});

const ForgotPassword = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setMessage("");
    setError("");

    try {
      const res = await axios.post("http://localhost:7411/api/auth/forgot-password", {
        email: data.email,
      });
      setMessage(res.data.message);
      reset(); // Clear input after submission
    } catch (err) {
      setError(err.response?.data?.message || <div><FaTimesCircle className='fs-4'/> Something went wrong while Sending Reset Link, resC:535</div>);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center position-relative">
        <Col xs={12} md={6}>
          <h2 className="text-center text-primary mb-4">Forgot Password</h2>
<div className='position-absolute top-0  p-2 m-4'>

{error && <Alert variant="danger" className='text-danger other'>{error}</Alert>}
  {message && <Alert variant="success" className='text-success'>{message}</Alert>}
</div>
          

          <Form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded shadow-sm bg-white">
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                {...register("email")}
                isInvalid={!!errors.email}
                placeholder="Enter your email"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100" disabled={isSubmitting}>
              {isSubmitting ? <div className="spinner"></div> : "Send Reset Link"}
            </Button>
          </Form>
          <div className="text">
                Remember Your password? <span className=" text-info"> <Link to="/user-home-page/sign-in">Sign In</Link></span>
                </div>
        </Col>
      
      </Row>
    </Container>
  );
};

export default ForgotPassword;
