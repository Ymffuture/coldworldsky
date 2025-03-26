import React from 'react'
import {Outlet} from 'react-router-dom';
import Badge from "react-bootstrap/Badge";

const UserPage = () => {
  return (
    <div className='container'>
      
        <p className='text-secondary p-4 mt-2 rounded'>Save password online in our website <Badge bg="success"> 13 October 2025</Badge></p>
      <Outlet/>
    </div>
  )
}

export default UserPage;
