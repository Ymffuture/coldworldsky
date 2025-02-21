import React from 'react'
import {Outlet} from 'react-router-dom';
import Badge from "react-bootstrap/Badge";
import { FaLockOpen } from 'react-icons/fa';
const UserPage = () => {
  return (
    <div className='container'>
      
        <p className='text-bg-info p-4 mt-2 rounded'>Save password online in our website <Badge bg="success"><FaLockOpen/> Comming soon</Badge></p>
      <Outlet/>
    </div>
  )
}

export default UserPage;
