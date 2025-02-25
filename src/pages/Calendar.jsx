import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Breadcrumb,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";

const Calendar = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showDate, setShowDate] = useState("");
  const [showDate2, setShowDate2] = useState("");
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const formattedDate = currentDate.toDateString();

  const handleClose = () => setShowEmail(false);
  const handleRegister = () => {
    window.location.href = "https://www.myformabc.com";
  };

  useEffect(() => {
    setShowDate(
      currentMonth < 2 ? (
        <Badge bg="warning">In Progress</Badge>
      ) : (
        <Badge bg="success">Completed</Badge>
      )
    );
  }, [currentMonth]);

  useEffect(() => {
    setShowDate2(
      currentMonth > 2 ? (
        <Badge bg="warning">In Progress</Badge>
      ) : (
        <Badge bg="success">Comming soon</Badge>
      )
    );
  }, [currentMonth]);

  const registrationStatusClass = currentMonth < 2 ? "active" : "";
  const registrationStatusClass2 = currentMonth > 2 ? "active" : "";
  return (
    <div  >
      {/* Header Section */}
      <header id="header" className="text-center">
        <div className="intro d-flex justify-content-center align-items-center vh-100 bg-primary text-white">
          <div className="container">
            <h1>
              Calendar<span>.</span>
            </h1>
            <p className="fs-5">{formattedDate}</p>
            <i className="text-uppercase fw-bold">Registration Timeline</i>
            <p className="fs-4">School Calendar of Skyford</p>
            <div className="d-flex justify-content-center gap-3">
              <Button variant="warning" size="lg" onClick={handleRegister}>
                Register
              </Button>
              <Button variant="success" size="lg">
                Assessment
              </Button>
            </div>
          </div>
        </div>
      </header>
<div className='calendar-main container'>
      {/* Alert Section */}

      {/* Breadcrumb */}
      <Breadcrumb className="my-4-4">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/about">About</Breadcrumb.Item>
        <Breadcrumb.Item active>School Calendar</Breadcrumb.Item>
      </Breadcrumb>

      {/* Main Content */}
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-danger-subtle fw-bold text-uppercase">
            Opening Day for Intake 2024: CLOSED!
          </h2>

          {/* School Terms */}
          <div className="bg-light p-4 rounded shadow">
            <h4 className="mb-4">School Terms</h4>
            <ul className="list-unstyled">
              <li className={`mb-2 ${registrationStatusClass}`}>
                Term 1: 15 January - 28 March {showDate}
              </li>
              <li className={`mb-2 ${registrationStatusClass2}`}>Term 2: 08 April - 27 June {showDate2}</li>
              <li>Term 3: 22 July - 03 October</li>
              <li>Term 4: 13 October - 12 December</li>
            </ul>
          </div>

          {/* Dropdown for Grades */}
        
        </div>
        
        <p className="p-4 mt-4 bg-success-subtle text-capitalize container">
                school Events
                <ul className="p-4 mb-4 m-4 bg-body-secondary">
                  <il>
                    28 MARCH <Badge bg="danger">Declined</Badge>
                  </il>

                  <ul>
                    <il>
                      08 APRIL <Badge bg="warning">Pendding</Badge>
                    </il>
                  </ul>
                  <ul>
                    <il>
                      22 JULY 
                    </il>
                  </ul>
                  <ul>
                    <il>
                      13 OCTOBER 
                    </il>
                  </ul>
                </ul>
                </p>
              
        <div className="container main-calendar">
        <div class="calendar">
              <div class="calendar-header"> Febuary 2025</div>
              <div class="calendar-days">
              <div className="text text-bg-danger">Sun</div>
                {['Mon' ,'Tue' , 'Wed', 'Thu', 'Fri'].map((weekdays)=>(
                  <>
                  <div key={weekdays}>{weekdays}</div>
                  </>
                ))}
              <div className="text text-bg-danger">Sat</div>
              </div>
             
              <div class="calendar-dates">
                {['','','','','','','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','',''].map((days)=>(
                  <div className="days-feb">{days}</div>
                ))}
              
              </div>
            </div>
            <div class="calendar container">
              <div class="calendar-header">March 2025</div>
              <div class="calendar-days">
              <div className="text-bg-danger">Sun</div>
                {['Mon' ,'Tue' , 'Wed', 'Thu', 'Fri'].map((weekdays)=>(
                  <>
                  <div key={weekdays}>{weekdays}</div>
                  </>
                ))}
              <div className="text-bg-danger">Sat</div>
              </div>
              <div class="calendar-dates">
                {['','','','','','','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'].map((days)=>(
                  <div className="days-March">{days}</div>
                ))}
              
              </div>
            </div>
            <div class="calendar container">
              <div class="calendar-header">April 2025</div>
              <div class="calendar-days">
              <div className="text-bg-danger">Sun</div>
                {['Mon' ,'Tue' , 'Wed', 'Thu', 'Fri'].map((weekdays)=>(
                  <>
                  <div key={weekdays}>{weekdays}</div>
                  </>
                ))}
              <div className="text-bg-danger">Sat</div>
              </div>
              <div class="calendar-dates">
                {['','','','','','','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'].map((days)=>(
                  <div className="days-March">{days}</div>
                ))}
              
              </div>
            </div>
          {/* Calendar */}

          {/* <div className="calendar bg-light p-3 rounded shadow">
            <h4 className="text-center">February 2025</h4>
            <div className="">
              <div>Sun</div>
              {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                <div key={day}>{day}</div>
              ))}
              <div>Sat</div>
              {Array.from({ length: 29 }, (_, i) => (
                <div key={i} className="calendar-dates">
                  {i + 1}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
      </div>
      {/* Modal */}
      <Modal show={showEmail} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                required
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Login <FaSignInAlt />
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p>Not registered yet?</p>
          <Link to="/form" className="btn btn-primary">
            Register Now
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Calendar;
