import React, { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addMonths, subMonths, addDays, isToday } from "date-fns";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link } from "react-router-dom";
import {
  Badge,
  Button,
} from "react-bootstrap";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import  '../styles/__style.module.css';
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const [showDate, setShowDate] = useState("");
  const [showDate2, setShowDate2] = useState("");
  const currentDate_ = new Date();
  const currentMonth = currentDate_.getMonth();
  const formattedDate = currentDate_.toDateString();

  useEffect(() => {
    setShowDate(
      currentMonth <= 2 ? (
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

  const registrationStatusClass = currentMonth <= 2 ? "active" : "";
  const registrationStatusClass2 = currentMonth > 2 ? "active" : "";
  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const renderDays = () => {
    const days = [];
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let day of weekDays) {
      days.push(
        <th key={day} className="text-center p-2 text-bg-secondary border-none">
          {day}
        </th>
      );
    }

    return <tr>{days}</tr>;
  };

  const renderCells = () => {
    let day = startDate;
    const rows = [];

    while (day <= endDate) {
      const cells = [];

      for (let i = 0; i < 7; i++) {
        const isCurrentMonth = day >= monthStart && day <= monthEnd;
        const isTodayDate = isToday(day);

        const cellClass = `text-center p-2 border ${isCurrentMonth ? "text-danger" : "text-dark opacity-50 "} ${isTodayDate ? "text-bg-success text-white bi bi-check-circle-fill" : ""
          }`;

        cells.push(
          <td key={day} className={`${cellClass} fw-bold`}>
            {format(day, "d")}
          </td>
        );

        day = addDays(day, 1);
      }

      rows.push(<tr key={day}>{cells}</tr>);
    }

    return rows;
  };

  return (
    <div>
      <header id="header" className="text-center">
        <div className="intro d-flex justify-content-center align-items-center vh-100 bg-primary text-white">
          <div className="container">
            <h1>
              Calendar<span>.</span>
            </h1>
            <p className="fs-5 text-dark bg-white p-2 rounded">{formattedDate}</p>
            <i className="text-uppercase fw-bold">Registration Timeline</i>
            <p className="fs-4">School Calendar</p>
            <div className="d-flex justify-content-center gap-3">
              <Button variant="warning" size="lg" onClick={() => console.log('Clicked')}>
                Register
              </Button>
              <Button variant="success" size="lg">
                Assessment
              </Button>
            </div>
          </div>
        </div>

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
      </header>

      <div className="container mt-5">
        <div className="card-none shadow m-2 mb-5 rounded">
          <div className="card-header d-flex justify-content-between align-items-center">
            <button onClick={handlePrevMonth} className="btn"><FaArrowAltCircleLeft className='fs-1 f arrow_'
             data-tooltip-id='arrow'
             data-tooltip-content='Previous Month'
            /></button>
            <h3 className="mb-0 p-2 rounded"
             data-tooltip-id='arrow'
             data-tooltip-content={formattedDate}
            ><i className={currentDate? 'bi bi-calendar-fill':'bi bi-calendar'}></i> {format(currentDate, "MMMM yyyy")}</h3>
            <button onClick={handleNextMonth} className="btn m-3"><FaArrowAltCircleRight className='fs-1 b arrow_'
            data-tooltip-id='arrow'
             data-tooltip-content='Next Month'
            /></button>
            <Tooltip id="arrow" />
          </div>
          <div className="card-body">
            <table className="table table-bordered" >
              <thead className='text-bt-info'>{renderDays()}</thead>
              <tbody>{renderCells()}</tbody>
            </table>
          </div>
        </div>

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
  );
}

export default Calendar;