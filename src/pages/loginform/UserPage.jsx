import React from 'react'
import {Link ,Outlet} from 'react-router-dom';

const UserPage = () => {
  return (
    <div className='container-fluid'>
        <p>SAve password online in our skyfordCCI website</p>
      <Outlet/>
    </div>
  )
}

export default UserPage;
