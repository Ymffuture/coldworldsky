import React from 'react'
import { Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <h1>Courses</h1>
      <Outlet /> {/* This renders the nested child routes */}
    </div>
  );
};

export default Courses
