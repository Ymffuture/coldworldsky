import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const Features = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1200 },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const containerStyle = {
    background:  "#f0f8ff",
    color: "#222",
    padding: "60px 20px",
    textAlign: "center",
    transition: "background 0.4s ease, color 0.4s ease",
  };

  const sectionTitleStyle = {
    fontSize: "2rem",
    fontWeight: 600,
    marginBottom: "10px",
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "8px 16px",
    background: "#1e90ff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  };

  const featureItemStyle = {
    width: "100%",
    maxWidth: "250px",
    margin: "20px auto",
    padding: "20px",
  };

  const iconStyle = {
    fontSize: "2.5rem",
    color: "whitesmoke",
    marginBottom: "12px",
  };

  const linkStyle = {
    color: "#1e90ff",
    textDecoration: "underline",
    fontWeight: "500",
  };

  return (
    <section id="features" style={containerStyle}>
      <div>
        <h2 style={sectionTitleStyle}>Core Features</h2>
        <p>
          Learn more on{" "}
          <a
            href="https://quorvexinstitute.vercel.app/about"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Quorvex Institute
          </a>
        </p>
        
      </div>

      {isTransitioning ? (
        <div style={{ marginTop: "40px", fontSize: "1.1rem", color: "#999" }}>
          <p>Loading features...</p>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          {data ? (
            data.map((item, i) => (
              <div key={i} style={featureItemStyle}>
                <animated.div style={fadeIn}>
                  <i className={item.icon} style={iconStyle} aria-hidden="true"></i>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "500" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: darkMode ? "#ccc" : "#555" }}>
                    {item.text}
                  </p>
                </animated.div>
              </div>
            ))
          ) : (
            <p>Loading content...</p>
          )}
        </div>
      )}
    </section>
  );
};

export default Features;

