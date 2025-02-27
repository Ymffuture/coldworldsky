import React, { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addMonths, subMonths, addDays, isToday } from "date-fns";
import { Link } from "react-router-dom";
import {
  Badge,
  Button,
} from "react-bootstrap";

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
  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const renderDays = () => {
    const days = [];
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let day of weekDays) {
      days.push(
        <th key={day} className="text-center p-2 bg-light border-2">
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
if(isTodayDate ===27){
cellClass = `bg-danger`
}
        const cellClass = `text-center p-3 border ${isCurrentMonth ? "text-primary" : "text-dark opacity-50"} ${isTodayDate ? "bg-success text-white rounded" : ""
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
            <p className="fs-5">{formattedDate}</p>
            <i className="text-uppercase fw-bold">Registration Timeline</i>
            <p className="fs-4">School Calendar of Skyford</p>
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
        <div className="card-none shadow">
          <div className="card-header d-flex justify-content-between align-items-center">
            <button onClick={handlePrevMonth} className="btn btn-outline-secondary">&lt;</button>
            <h3 className="mb-0">{format(currentDate, "MMMM yyyy")}</h3>
            <button onClick={handleNextMonth} className="btn btn-outline-secondary m-3">&gt;</button>
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