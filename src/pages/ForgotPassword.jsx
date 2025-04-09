import { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { URL_BACKEND_HTTPS } from "../../Urls";
import Spinner from "../componets/Spinner";

// Validation Schema using Yup
const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required, eg: yourname@gmail.com"),
});

const ForgotPassword = () => {
  const [readOnly, setReadOnly] = useState(false);
  const [border, setBorder] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setBorder("border-green");
    setReadOnly(true);

    try {
      const res = await axios.post(`${URL_BACKEND_HTTPS}/api/auth/forgot-password`, {
        email: data.email,
      });

      toast.success(res.data.message, {
        position: "top-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
      });

      reset();
    } catch (err) {
      toast.error(err.response?.data?.message || "Error Creating reset Link", {
        position: "top-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
      });
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <ToastContainer />
      <Row className="w-100 justify-content-center position-relative">
        <Col xs={12} md={6}>
          <h2 className="text-center text-primary mb-4">Forgot Password</h2>

          <Form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded shadow-sm bg-white">
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                {...register("email")}
                isInvalid={!!errors.email}
                placeholder="Enter your registered email"
                readOnly={readOnly}
                className={`${border}`}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100" disabled={isSubmitting}>
              {isSubmitting ? <Spinner /> : "Send Reset Link"}
            </Button>
          </Form>

          <div className="text mt-3 text-center">
            Remember your password?{" "}
            <Link
              to="/user-home-page/sign-in"
              style={{ color: "black", textDecoration: "none" }}
              onMouseEnter={(e) => (e.target.style.color = "orange")}
              onMouseLeave={(e) => (e.target.style.color = "black")}
            >
              Sign In
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
