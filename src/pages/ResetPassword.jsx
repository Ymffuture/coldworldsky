// ResetPassword.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bulma/css/bulma.min.css";
import "antd/dist/reset.css";
import { Form, Input, Button, message } from "antd";
import { URL_BACKEND_HTTPS } from "../../Urls";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async ({ password }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${URL_BACKEND_HTTPS}/api/auth/reset-password/${token}`,
        { password }
      );
      message.success(res.data.message, 3);
      setTimeout(() => navigate("/user-home-page/sign-in"), 3000);
    } catch (err) {
      message.error(err.response?.data?.message || "Something went wrong", 3);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-6-tablet is-4-desktop">
            <h2 className="title has-text-centered has-text-primary">Reset Password</h2>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              requiredMark={false}
            >
              <Form.Item
                name="password"
                label="New Password"
                rules={[
                  { required: true, message: "Please input your new password" },
                  { min: 6, message: "Password must be at least 6 characters" },
                ]}
                hasFeedback
              >
                <Input.Password placeholder="Enter new password" />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  { required: true, message: "Please confirm your password" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("Passwords do not match"));
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm new password" />
              </Form.Item>


              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="is-fullwidth"
                  loading={loading}
                >
                  Reset Password
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;

