// AdminPanel.jsx
import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

const AdminPanel = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'applications'));
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setApps(data);
    };
    fetchData();
  }, []);

  const rejectApplication = async (id) => {
    await updateDoc(doc(db, 'applications', id), {
      status: 'rejected'
    });
    alert('Application rejected');
    setApps(prev => prev.map(app => app.id === id ? { ...app, status: 'rejected' } : app));
  };

  return (
    <div className="section">
      <h2 className="title">Admin Panel</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
            <th>Subjects</th>
            <th>Status</th>
            <th>Document</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {apps.map(app => (
            <tr key={app.id}>
              <td>{app.name} {app.surname}</td>
              <td>{app.grade}</td>
              <td>{app.subjects}</td>
              <td><span className={`tag is-${app.status === 'rejected' ? 'danger' : 'info'}`}>{app.status}</span></td>
              <td><a href={app.documentURL} target="_blank" rel="noreferrer">View</a></td>
              <td>
                {app.status !== 'rejected' && (
                  <button className="button is-danger is-small" onClick={() => rejectApplication(app.id)}>Reject</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;

