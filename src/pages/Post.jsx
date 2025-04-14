import React from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {
  FaBookmark, FaCalendarCheck, FaEnvelope, FaGlobe,
  FaLocationArrow, FaPrint, FaTabletAlt, FaWhatsapp
} from 'react-icons/fa';

const Post = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center text-bg-primary p-3 rounded fw-bold">Quorvex Tutoring Classes</h1>

      <div className="bg-warning text-dark p-3 rounded mb-4">
        <p>
          We offer <strong>Physics and Mathematics</strong> and get <strong>Life Sciences FREE</strong> – YES, FREE!
          Only for Grade 10 and 12 students.
        </p>
        <hr />
        <div className="bg-light p-3 rounded text-center">
          <FaEnvelope className="text-secondary me-2" />
          <a href="mailto:quorvexinstitute@gmail.com" className="me-3 text-decoration-none">quorvexinstitute@gmail.com</a>
          
          <FaWhatsapp className="text-success me-2" />
          <a href="tel:+27653935339" className="me-3 text-decoration-none">065 393 5339</a>
          
          <FaGlobe className="text-primary me-2" />
          <a href="https://quorvexinstitute.vercel.app" target="_blank" rel="noopener noreferrer" className="me-3 text-decoration-none">quorvexinstitute.vercel.app</a>

          <button className="btn btn-outline-success btn-sm mt-2 mt-md-0" onClick={() => window.open('/location')}>
            <FaLocationArrow className="me-2" /> Tjovitjo Phase 2
          </button>
        </div>
      </div>

      <div className="bg-light p-4 rounded mb-4">
        <h5 className="fw-bold">How We Work</h5>
        <div className="d-flex flex-wrap gap-3 my-2">
          <div className="text-bg-danger p-2 rounded">Sun</div>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
            <div key={day} className="p-2 border rounded">
              <FaBookmark className="me-2" /> {day}
            </div>
          ))}
          <div className="text-bg-danger p-2 rounded">Sat</div>
        </div>
        <p>
          <FaCalendarCheck className="me-2" />
          <strong>Classes: Tuesday to Thursday Weekly</strong>
        </p>

        <ul className="list-group mb-3">
          <li className="list-group-item list-group-item-info">
            1st week: Tue & Wed - Mathematics, Thu - Physical Sciences
          </li>
          <li className="list-group-item list-group-item-info">
            2nd week: Tue & Wed - Physical Sciences, Thu - Mathematics
          </li>
        </ul>

        <ol className="list-group mb-3">
          <li className="list-group-item list-group-item-warning">
            Weekend (Optional): 1 Subject + Life Sciences
          </li>
          <li className="list-group-item list-group-item-danger">
            Duration: 60 to 90 minutes
          </li>
        </ol>
      </div>

      <h3 className="mb-3"><FaTabletAlt className="me-2" />Per Subject Pricing</h3>

      <Table striped bordered hover responsive size="sm" className="mb-4">
        <thead className="table-primary">
          <tr>
            <th>Subjects</th>
            <th>Reg. No</th>
            <th>Sub. Code</th>
            <th>Price (R)</th>
            <th>Any 2 (R)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mathematics</td>
            <td>1427</td>
            <td>MAT</td>
            <td>180</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Physical Science</td>
            <td>1124</td>
            <td>PHYS</td>
            <td>170</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Life Sciences</td>
            <td>1168</td>
            <td>LFS</td>
            <td>150</td>
            <td>280</td>
          </tr>
          <tr>
            <td>Maths & Sciences</td>
            <td>3485</td>
            <td>MAT+SCI</td>
            <td>350</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </Table>

      <div className="text-center">
        <button className="btn btn-outline-primary" onClick={() => window.print()}>
          <FaPrint className="me-2" />Print This Page
        </button>
      </div>
    </div>
  );
};

export default Post;

