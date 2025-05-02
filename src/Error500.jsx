import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Error500 = () => {
  return (
    <motion.section
      className="hero is-fullheight has-text-centered is-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="hero-body is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
        <h1 className="title is-size-1 has-text-white mb-3">500</h1>
        <p className="subtitle is-size-4 has-text-grey-light mb-5">
          Something went wrong on our end.
        </p>

        <Link to="/" className="button is-light is-rounded is-medium">
          Go back home
        </Link>

        <div className="mt-6 has-text-grey-light is-size-7">
          If the problem persists, please contact <a href="mailto:support@quorvex.com">support@quorvex.com</a>.
        </div>
      </div>
    </motion.section>
  );
};

export default Error500;

