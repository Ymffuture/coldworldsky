import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../componets/Loader";
import "bulma/css/bulma.min.css";

const CBP = () => {
  const [onLoading, setOnLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setOnLoading(false), 3000); // Reduced to 3s for better UX
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section has-background-light">
      <div className="container">
        <div className="box has-shadow has-text-centered">
          <h1 className="title is-3 has-text-primary">Compare Prices</h1>
          <p className="subtitle is-5 has-text-grey-dark">
            We offer <span className="has-text-weight-bold has-text-success">flexible pricing</span> to suit your budget.
          </p>

          {onLoading ? (
            <div className="notification is-info is-light mt-4 p-5">
              <Loader />
              <p className="mt-3">Please wait while we are loading the table...</p>
            </div>
          ) : (
            <div className="section">
              <Outlet />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CBP;
