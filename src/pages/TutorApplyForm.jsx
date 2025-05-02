import React from 'react';
import { Form, Input, Button, Upload, Select, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { db, storage } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

const { Option } = Select;

const ApplicationForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
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
                    <Input placeholder="Enter your name" />
                  </Form.Item>
                </div>
                <div className="column is-half">
                  <Form.Item name="surname" label="Surname" rules={[{ required: true }]}>
                    <Input placeholder="Enter your surname" />
                  </Form.Item>
                </div>
                <div className="column is-half">
                  <Form.Item name="dob" label="Date of Birth" rules={[{ required: true }]}>
                    <Input type="date" />
                  </Form.Item>
                </div>
                <div className="column is-half">
                  <Form.Item name="race" label="Race" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                </div>
                <div className="column is-half">
                  <Form.Item name="grade" label="Grade" rules={[{ required: true }]}>
                    <Select placeholder="Select your grade">
                      {[8, 9, 10, 11, 12].map((g) => (
                        <Option key={g} value={g.toString()}>Grade {g}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
                <div className="column is-half">
                  <Form.Item name="subjects" label="Subjects to Enroll" rules={[{ required: true }]}>
                    <Input placeholder="e.g. Maths, Physical Sciences" />
                  </Form.Item>
                </div>
                <div className="column is-full">
                  <Form.Item name="document" label="Upload Document" rules={[{ required: true }]}>
                    <Upload beforeUpload={() => false}>
                      <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                  </Form.Item>
                </div>
                <div className="column is-half">
                  <Form.Item name="cell" label="Cell Phone Number" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                </div>
                <div className="column is-half">
                  <Form.Item name="whatsapp" label="WhatsApp Number" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                </div>
                <div className="column is-full">
                  <Form.Item name="moyaLink" label="Link to Moya App" rules={[{ required: true }]}>
                    <Input placeholder="Paste your Moya profile/app link" />
                  </Form.Item>
                </div>
              </div>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="is-fullwidth">Submit Application</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
