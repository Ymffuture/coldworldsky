import React from 'react';
import { Form, Input, Button, Upload, Select, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const { Option } = Select;

const ApplicationForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const docId = uuidv4();
      await addDoc(collection(db, 'applications'), { id: docId, ...values });
      message.success('Application submitted successfully!');
      form.resetFields();
    } catch (error) {
      console.error(error);
      message.error('Failed to submit application');
    }
  };

  return (
    <div className="section">
      <div className="container">
        <h2 className="title is-4">Application Form</h2>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="surname" label="Surname" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="dob" label="Date of Birth" rules={[{ required: true }]}>
            <Input type="date" />
          </Form.Item>
          <Form.Item name="race" label="Race" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="grade" label="Grade" rules={[{ required: true }]}>
            <Select placeholder="Select your grade">
              <Option value="8">Grade 8</Option>
              <Option value="9">Grade 9</Option>
              <Option value="10">Grade 10</Option>
              <Option value="11">Grade 11</Option>
              <Option value="12">Grade 12</Option>
            </Select>
          </Form.Item>
          <Form.Item name="subjects" label="Subjects to Enroll" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="document" label="Upload Document" rules={[{ required: true }]}>
            <Upload beforeUpload={() => false}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item name="cell" label="Cell Phone Number" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="whatsapp" label="WhatsApp Number" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="moyaLink" label="Moya App Link" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ApplicationForm;

