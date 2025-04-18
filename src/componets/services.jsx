import React from "react";
import Loader from "./Loader";

const Services = ({ data }) => {
  const containerStyle = {
    padding: "60px 20px",
    backgroundColor: "#f0f8ff",
    color: "#222",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const descStyle = {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "40px",
  };

  const serviceBox = {
    width: "100%",
    maxWidth: "320px",
    margin: "20px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease",
  };

  const iconStyle = {
    fontSize: "2rem",
    color: "#1e90ff",
    marginBottom: "10px",
  };

  const serviceTitle = {
    fontSize: "1.2rem",
    fontWeight: "600",
    margin: "10px 0",
  };

  const serviceText = {
    fontSize: "0.95rem",
    color: "#666",
  };

  return (
    <section id="services" style={containerStyle}>
      <div>
        <h2 style={titleStyle}>Our Services</h2>
        <p style={descStyle}>
          Quality educational services covering coding, mathematics, science, and more for high school and university-level students.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {data ? (
            data
              .filter((item) => item.name !== "Mobile App Development")
              .map((d, i) => (
                <div key={`${d.name}-${i}`} style={serviceBox}>
                  <i className={d.icon} style={iconStyle} aria-hidden="true" />
                  <div>
                    <h3 style={serviceTitle}>{d.name}</h3>
                    <p style={serviceText}>{d.text}</p>
                  </div>
                </div>
              ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
