// AdminPanel.jsx
import React, { useEffect, useState } from "react";
import { Table, Button, Input, Tag, message } from "antd";
import { db } from "./firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const AdminPanel = () => {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "applications"));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setApplications(data);
  };

  const handleReject = async id => {
    await deleteDoc(doc(db, "applications", id));
    message.success("Application rejected");
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = applications.filter(app =>
    app.grade.toLowerCase().includes(search.toLowerCase()) ||
    app.subjects.join(" ").toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Surname", dataIndex: "surname", key: "surname" },
    { title: "Grade", dataIndex: "grade", key: "grade" },
    {
      title: "Subjects",
      dataIndex: "subjects",
      key: "subjects",
      render: subjects => subjects.map((s, i) => <Tag key={i}>{s}</Tag>)
    },
    { title: "WhatsApp", dataIndex: "whatsapp", key: "whatsapp" },
    {
      title: "Document",
      dataIndex: "documentUrl",
      key: "documentUrl",
      render: url => <a href={url} target="_blank" rel="noreferrer">View</a>
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button danger onClick={() => handleReject(record.id)}>
          Reject
        </Button>
      ),
    },
  ];

  return (
    <div className="section">
      <Input.Search
        placeholder="Search by grade or subject"
        onChange={e => setSearch(e.target.value)}
        className="mb-4"
      />
      <Table
        dataSource={filteredData}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 6 }}
      />
    </div>
  );
};

export default AdminPanel;

