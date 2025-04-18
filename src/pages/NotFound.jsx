import React from 'react';
import { FaArrowAltCircleLeft, FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const NotFound = ()=>{

    return(
<div className="container d-flex">
<div className="page404 container" style={{height:"100vh",margin:"0"}}>

<h1 className="fw-bold h1" ><FaExclamationTriangle className="divtag"/> Error <span >404</span></h1>
<p className="output p-4">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>

</div>
<Link to="/"> <FaArrowAltCircleLeft className="fs-2 mt-2"/> Back</Link>
</div>
    );
}

export default NotFound;