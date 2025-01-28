import { useState, useEffect } from "react";
import "./_login.css";
import toast from "react-hot-toast";
import Captcha from "../Captcha";
const Login = () => {
  const initialValues = {
    username: "",

    email: "",

    password: "",

    confirmPassword: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));

    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Those passwords didn’t match. Try again.";
    }

    return errors;
  };

  return (
    <>
      <div className="bgImg"></div>
      <div className="container sign">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message-success text-bg-success p-4 ">
            Logging... please wait
          </div>
        ) : (
          console.log("Entered Details", formValues)
        )}

        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>

          <div className="ui divider"></div>

          <div className="form container ui">
            <img src="/img/logosk.jpg" />

            {/* <div className="field">
              <label>Username</label>
              <i className="fa fa-user"></i>

              <input
                type="text"
                name="username"
                placeholder="Choose a username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div> */}

            <p className="p">{formErrors.username}</p>

            <div className="field">
              <label>Email</label>
              <i className="fa fa-envelope"></i>

              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>

            <p className="p">{formErrors.email}</p>

            <div className="field">
              <label>Password</label>
              <i className="fa fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>

            <p className="p">{formErrors.password}</p>

            {/* <div className="field">
              {formValues.confirmPassword !== formValues.password ? (
                <label>Confirm Password</label>
              ) : (
                <label className=" text-success fw-bold">
                  Password Matched
                </label>
              )}

              {formValues.confirmPassword === formValues.password? (
                <i className="fa fa-check-circle-o"></i>
              ) : (
                <i className="fa fa-lock"></i>
              )}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formValues.confirmPassword}
                onChange={handleChange}
              />
            </div> */}

            <br />
            <hr />
            <p className="p">{formErrors.confirmPassword}</p>

            <button className="fluid blue">Submit</button>
          </div>
        </form>

        <div className="text">
        You don't have an account? <span className=" text-info"> <a href="/user-home-page/sign-up">Register</a></span>
        </div>
      </div>{" "}
      {/* <Captcha /> */}
    </>
  );
};

export default Login;
