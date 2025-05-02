import React, { useState, useEffect } from "react";
import {
  format, startOfMonth, endOfMonth, startOfWeek, endOfWeek,
  addMonths, subMonths, addDays, isToday, isSameMonth
} from "date-fns";
import { Tooltip } from "react-tooltip";
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import "bulma/css/bulma.min.css";

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

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

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
          "box has-text-centered p-2",
          today && "has-background-success has-text-white",
          !isSameMonth(day, monthStart) ? "has-text-grey-light" : "",
        ].filter(Boolean).join(" ");

        cells.push(
          <td key={day}>
            <div
              className={classes}
              data-tooltip-id="dayTooltip"
              data-tooltip-content={`${isHoliday?.title || ""} ${isEvent?.title || ""}`}
            >
              {format(day, "d")}
              {isHoliday && <span className="tag is-warning is-light is-small ml-1">H</span>}
              {isEvent?.type === "Assignment" && (
                <span className="tag is-info is-light is-small ml-1">A</span>
              )}
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
      {/* Banner with Unsplash background */}
      <section
        className="hero is-medium is-primary is-bold mb-5"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1500&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-body has-text-white" style={{ backgroundColor: "rgba(0,0,0,0.4)", borderRadius: "8px", height:"100vh"}}>
          <div className="container has-text-centered">
            <h1 className="title is-2 has-text-white">
              <FaCalendarAlt /> School Calendar
            </h1>
            <p className="subtitle is-4">{format(currentDate, "MMMM yyyy")}</p>
            <div className="buttons is-centered mt-4">
              <button className="button is-light" onClick={handlePrevMonth}>
                <FaChevronLeft /> &nbsp; Prev
              </button>
              <button className="button is-light" onClick={handleNextMonth}>
                Next &nbsp; <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Table */}
      {loading ? (
        <button className="button is-loading is-primary is-light">Loading calendar...</button>
      ) : (
        <div className="table-container">
          <table className="table is-bordered is-striped is-hoverable is-fullwidth">
            <thead>{renderDays()}</thead>
            <tbody>{renderCells()}</tbody>
          </table>
        </div>
      )}

      <Tooltip id="dayTooltip" />

      {/* Event List */}
      <div className="content mt-6" style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
  <h3 className="title is-4" style={{ textAlign: 'center', color: '#1E90FF', marginBottom: '1.5rem' }}>
    Upcoming Events
  </h3>
  <ul style={{ listStyle: 'none', padding: 0 }}>
    {events.map((e, i) => (
      <li key={i} style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center' }}>
        <span
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#FFD700',
            marginRight: '10px',
          }}
        ></span>
        <div>
          <strong style={{ fontSize: '1.1rem', color: '#363636' }}>{e.title}</strong> on{" "}
          <span className="tag is-info" style={{ fontSize: '0.9rem', padding: '0.4em 0.7em' }}>{e.date}</span>
        </div>
      </li>
    ))}
  </ul>
</div>

    </div>
  );
};

export default Calendar;

