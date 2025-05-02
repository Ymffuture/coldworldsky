// ApplicationForm.jsx
import React, { useState } from 'react';
import { db, storage } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { Form, Input, Button, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const ApplicationForm = () => {
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);

  const handleUploadChange = ({ file }) => {
    setFile(file.originFileObj);
  };

  const handleSubmit = async (values) => {
    if (!file) {
      message.error('Please upload your document.');
      return;
    }

    const docRef = ref(storage, `documents/${uuidv4()}`);
    await uploadBytes(docRef, file);
    const documentURL = await getDownloadURL(docRef);

    await addDoc(collection(db, 'applications'), {
      ...values,
      documentURL,
      status: 'pending',
    });

    message.success('Application submitted successfully!');
    form.resetFields();
    setFile(null);
  };

  return (
    <div className="section">
      <h2 className="title">Application Form</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="box"
      >
        <Form.Item label="Name" name="name" rules={[{ required: true }]}> <Input /> </Form.Item>
        <Form.Item label="Surname" name="surname" rules={[{ required: true }]}> <Input /> </Form.Item>
        <Form.Item label="Date of Birth" name="dob" rules={[{ required: true }]}> <Input type="date" /> </Form.Item>
        <Form.Item label="Race" name="race" rules={[{ required: true }]}> <Input /> </Form.Item>
        <Form.Item label="Grade" name="grade" rules={[{ required: true }]}> <Input /> </Form.Item>
        <Form.Item label="Subjects" name="subjects" rules={[{ required: true }]}> <Input.TextArea /> </Form.Item>
        <Form.Item label="Phone Number" name="phone" rules={[{ required: true }]}> <Input /> </Form.Item>
        <Form.Item label="WhatsApp Number" name="whatsapp" rules={[{ required: true }]}> <Input /> </Form.Item>
        <Form.Item label="Moya App Link" name="moyaLink" rules={[{ required: true }]}> <Input /> </Form.Item>

        <Form.Item label="Upload Document" rules={[{ required: true }]}> 
          <Upload.Dragger beforeUpload={() => false} onChange={handleUploadChange} showUploadList={true}>
            <p className="ant-upload-drag-icon"><InboxOutlined /></p>
            <p>Click or drag file to this area to upload</p>
          </Upload.Dragger>
        </Form.Item>

        <Button type="primary" htmlType="submit" className="mt-4 is-fullwidth">Submit Application</Button>
      </Form>
    </div>
  );
};

export default ApplicationForm;

