import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button, Tooltip } from "antd";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "antd/dist/reset.css"; // Ant Design styles
import "react-tooltip/dist/react-tooltip.css"; // React Tooltip

const Header = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // true if token exists
  }, []);

  // Background fade animation
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 5000 },
  });

  const style = {
    background: "transparent",
    border: "2px solid white",
  };

  return (
    <header id="header" className="text-center position-relative">
      <div className="intro">
        <div className="overlay d-flex justify-content-center align-items-center vh-100">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : <span id="p">QUORVEXIN</span>}
                </h1>
                <p>{props.data ? props.data.paragraph : <span>Loading...</span>}</p>

                {/* Link with Animation */}
                <div className="g-2 d-block">
                  <br />
                  <Link
                    style={style}
                    to={isAuthenticated ? "/about" : "/user-home-page/sign-up"}
                    className="btn btn-lg page-scroll"
                  >
                    <Button
                      type="primary"
                      size="large"
                      className="is-rounded"
                      style={{ padding: "10px 20px", fontSize: "16px" }}
                    >
                      {isAuthenticated ? "Learn more" : "Get Started"}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background */}
      <animated.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "url('/img/intro-bg.jpg') center/cover no-repeat",
          zIndex: -1,
          opacity: fadeIn.opacity.to((o) => o),
        }}
      ></animated.div>
    </header>
  );
};

export default Header;
