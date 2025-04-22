// Calendar.jsx
import React, { useState, useEffect } from "react";
import {
  format, startOfMonth, endOfMonth, startOfWeek, endOfWeek,
  addMonths, subMonths, addDays, isToday, isSameDay
} from "date-fns";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { FaArrowLeft, FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([
    { date: "2025-04-27", title: "Freedom Day Event", type: "Holiday" },
    { date: "2025-04-30", title: "Assignment 1 Due", type: "Assignment" },
    { date: "2025-05-01", title: "Worker's Day", type: "Holiday" },
  ]);

  useEffect(() => {
    const fetchHolidays = async () => {
      setLoading(true);
      try {
        // Replace with real API call
        const res = await fetch("/mock/holidays.json");
        const data = await res.json();
        setHolidays(data.holidays || []);
      } catch (err) {
        console.error("Failed to load holidays", err);
      }
      setLoading(false);
    };
    fetchHolidays();
  }, []);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const renderDays = () => (
    <tr>
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
        <th key={d} className="has-text-centered">{d}</th>
      ))}
    </tr>
  );

  const renderCells = () => {
    let day = startDate;
    const rows = [];

    while (day <= endDate) {
      const cells = [];

      for (let i = 0; i < 7; i++) {
        const dateStr = format(day, "yyyy-MM-dd");
        const isHoliday = holidays.find(h => h.date === dateStr);
        const isEvent = events.find(e => e.date === dateStr);
        const today = isToday(day);

        const classes = [
          "box has-text-centered",
          today && "has-background-success has-text-white",
          !isSameDay(monthStart, day) && !isSameDay(monthEnd, day) ? "has-text-grey-light" : "",
        ]
          .filter(Boolean)
          .join(" ");

        cells.push(
          <td key={day} className="p-2">
            <div className={classes} data-tooltip-id="dayTooltip" data-tooltip-content={
              `${isHoliday?.title || ""} ${isEvent?.title || ""}`
            }>
              {format(day, "d")}
              {isHoliday && <span className="tag is-warning is-light is-small ml-1">H</span>}
              {isEvent?.type === "Assignment" && <span className="tag is-info is-light is-small ml-1">A</span>}
            </div>
          </td>
        );

        day = addDays(day, 1);
      }
      rows.push(<tr key={day}>{cells}</tr>);
    }
    return rows;
  };

  return (
    <div className="container">
      <section className="hero is-info is-bold mb-5" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x400/?school,education)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-body has-text-centered has-background-dark-opacity">
          <p className="title has-text-white">
            <FaCalendarAlt className="mr-2" /> School Calendar
          </p>
          <p className="subtitle has-text-light">{format(currentDate, "MMMM yyyy")}</p>
          <div className="buttons is-centered mt-3">
            <button className="button is-light" onClick={handlePrevMonth}><FaArrowLeft className="mr-1" /> Previous</button>
            <button className="button is-light" onClick={handleNextMonth}>Next <FaArrowRight className="ml-1" /></button>
          </div>
        </div>
      </section>

      {loading ? (
        <progress className="progress is-primary is-small" max="100">Loading</progress>
      ) : (
        <div className="table-container animate__animated animate__fadeIn">
          <table className="table is-bordered is-striped is-hoverable is-fullwidth">
            <thead>{renderDays()}</thead>
            <tbody>{renderCells()}</tbody>
          </table>
        </div>
      )}

      <Tooltip id="dayTooltip" />

      <div className="content mt-5 animate__animated animate__fadeInUp">
        <h3 className="title is-4">Upcoming Events</h3>
        <ul>
          {events.map((e, i) => (
            <li key={i}>
              <strong>{e.title}</strong> on <span className="tag is-info">{e.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;

