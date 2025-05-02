import React, { useState } from 'react';
import { Form, Input, Button, Upload, Select, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { db, storage } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

const { Option } = Select;

const ApplicationForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false); // state to control loading animation

  const onFinish = async (values) => {
    setLoading(true); // Start loading animation
    try {
      const docId = uuidv4();
      const file = values.document.file.originFileObj;

      const storageRef = ref(storage, `documents/${docId}`);
      await uploadBytes(storageRef, file);
      const documentUrl = await getDownloadURL(storageRef);

      const payload = {
        id: docId,
        ...values,
        documentUrl,
      };
      delete payload.document;

      await addDoc(collection(db, 'applications'), payload);
      message.success('Application submitted successfully!');
      form.resetFields();
    } catch (error) {
      console.error(error);
      message.error('Failed to submit application');
    } finally {
      setLoading(false); // Stop loading animation
    }
  };

  return (
    <div className="section">
      <div className="container">
        <h2 className="title is-4 has-text-centered">Application Form</h2>
        <div className="columns is-centered">
          <div className="column is-10">
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <div className="columns is-multiline">
                <div className="column is-half">
                  <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input
                      placeholder="Enter your name"
                      className="input is-rounded"
                      style={{ borderRadius: '25px', padding: '10px' }}
                    />
                  </Form.Item>
                </div>
                <div className="column is-half">
                  <Form.Item name="surname" label="Surname" rules={[{ required: true }]}>
                    <Input
                      placeholder="Enter your surname"
                      className="input is-rounded"
                      style={{ borderRadius: '25px', padding: '10px' }}
                    />
                  </Form.Item>
                </div>
                <div className="column is-half">
                  <Form.Item name="dob" label="Date of Birth" rules={[{ required: true }]}>
                    <Input
                      type="date"
                      className="input is-rounded"
                      style={{ borderRadius: '25px', padding: '10px' }}
                    />
                  </Form.Item>
                </div>
                <div className="column is-half">
                  <Form.Item name="race" label="Race" rules={[{ required: true }]}>
                    <Select
                      placeholder="Select your race"
                      className="is-rounded"
                      style={{
                        borderRadius: '25px',
                        padding: '10px',
                        width: '100%',
                      }}
                    >
                      <Option value="Black">Black</Option>
                      <Option value="White">White</Option>
                      <Option value="Colored">Colored</Option>
                      <Option value="Indian">Indian</Option>
                      <Option value="Other">Other</Option>
                    </Select>
                  </Form.Item>
                </div>
                <div className="column is-half">
                  <Form.Item name="grade" label="Grade" rules={[{ required: true }]}>
                    <Select
                      placeholder="Select your grade"
                      className="is-rounded"
                      style={{
                        borderRadius: '25px',
                        padding: '10px',
                        width: '100%',
                      }}
                    >
                      {[8, 9, 10, 11, 12].map((g) => (
                        <Option key={g} value={g.toString()}>
                          Grade {g}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
                <div className="column is-half">
                  <Form.Item name="subjects" label="Subjects to Enroll" rules={[{ required: true }]}>
                    <Input
                      placeholder="e.g. Maths, Physical Sciences"
                      className="input is-rounded"
                      style={{ borderRadius: '25px', padding: '10px' }}
                    />
                  </Form.Item>
                </div>
                <div className="column is-full">
                  <Form.Item name="document" label="Upload Document" rules={[{ required: true }]}>
                    <Upload beforeUpload={() => false}>
                      <Button
                        icon={<UploadOutlined />}
                        style={{
                          borderRadius: '25px',
                          backgroundColor: '#4CAF50',
                          color: 'white',
                        }}
                      >
                        Click to Upload
                      </Button>
                    </Upload>
                  </Form.Item>
                </div>
                <div className="column is-half">
                  <Form.Item name="cell" label="Cell Phone Number" rules={[{ required: true }]}>
                    <Input
                      className="input is-rounded"
                      placeholder="Cell phone number"
                      style={{ borderRadius: '25px', padding: '10px' }}
                    />
                  </Form.Item>
                </div>
                <div className="column is-half">
                  <Form.Item name="whatsapp" label="WhatsApp Number" rules={[{ required: true }]}>
                    <Input
                      className="input is-rounded"
                      placeholder="WhatsApp number"
                      style={{ borderRadius: '25px', padding: '10px' }}
                    />
                  </Form.Item>
                </div>
                <div className="column is-full">
                  <Form.Item name="moyaLink" label="Moya App Link" rules={[{ required: true }]}>
                    <Input
                      className="input is-rounded"
                      placeholder="Paste your Moya profile/app link"
                      style={{ borderRadius: '25px', padding: '10px' }}
                    />
                  </Form.Item>
                </div>
              </div>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={`is-fullwidth ${loading ? 'is-loading' : ''}`}
                  style={{
                    backgroundColor: '#4CAF50',
                    borderRadius: '25px',
                    padding: '12px 20px',
                    color: 'white',
                  }}
                >
                  {loading ? 'Submitting...' : 'Submit Application'}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;

