import React, { useState, useEffect } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  addDays,
  isToday,
} from "date-fns";
import "bulma/css/bulma.min.css";
import "./Calendar.css"; // custom styles if needed

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setEvents([
        {
          title: "Math Assignment Due",
          date: "2025-04-25",
          description: "Chapter 5 Exercises",
        },
        {
          title: "Science Fair",
          date: "2025-05-10",
          description: "Annual school science exhibition",
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const schoolTerms = [
    { term: "Term 1", start: "15 January", end: "28 March" },
    { term: "Term 2", start: "08 April", end: "27 June" },
    { term: "Term 3", start: "22 July", end: "03 October" },
    { term: "Term 4", start: "13 October", end: "12 December" },
  ];

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const renderDays = () => {
    const days = [];
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let day of weekDays) {
      days.push(
        <th key={day} className="has-text-centered has-background-info-light">
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

        const cellClass = `
          has-text-centered
          ${isCurrentMonth ? "has-text-primary" : "has-text-grey-light"}
          ${isTodayDate ? "has-background-success has-text-white" : ""}
          px-1 py-2
        `;

        cells.push(
          <td key={day} className={cellClass} style={{ minWidth: '2rem' }}>
            {format(day, "d")}
          </td>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <tr key={day.toString()} className="animate__animated animate__fadeIn">
          {cells}
        </tr>
      );
    }
    return rows;
  };

  return (
    <div className="container p-4">
      <section className="section">
        <h1 className="title has-text-centered">School Calendar</h1>

        <div className="buttons is-centered is-flex-wrap-wrap">
          <button onClick={handlePrevMonth} className="button is-info m-2">
            Previous
          </button>
          <h2 className="subtitle is-flex is-align-items-center m-2">
            {format(currentDate, "MMMM yyyy")}
          </h2>
          <button onClick={handleNextMonth} className="button is-info m-2">
            Next
          </button>
        </div>

        <div className="box">
          <div className="table-container">
            <table className="table is-bordered is-striped is-fullwidth is-hoverable">
              <thead>{renderDays()}</thead>
              <tbody>{renderCells()}</tbody>
            </table>
          </div>
        </div>

        <div className="box animate__animated animate__fadeInUp">
          <h2 className="subtitle">School Terms</h2>
          <ul>
            {schoolTerms.map(({ term, start, end }) => (
              <li key={term}>
                <strong>{term}:</strong> {start} - {end}
              </li>
            ))}
          </ul>
        </div>

        <div className="box animate__animated animate__fadeInUp animate__delay-1s">
          <h2 className="subtitle">Upcoming Events & Assignments</h2>
          {loading ? (
            <progress className="progress is-small is-info" max="100">Loading</progress>
          ) : (
            <ul>
              {events.map((event) => (
                <li key={event.title} className="mb-2">
                  <strong>{event.title}</strong> - {event.date}
                  <p>{event.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
};

export default Calendar;

