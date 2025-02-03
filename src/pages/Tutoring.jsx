import React  from "react";
import {Link ,Outlet} from 'react-router-dom';
import { FaBookReader, FaStar} from 'react-icons/fa';
const Tutoring = () => {

  const previousWork = [
    {id:'1', name:'Subjects', link:'/tutoring/subjects/Mathematics', icon:<FaBookReader/>}
   
    
];

return (
  <>
    <header id="header">
      <div className="intro container-fluid ">
        <div className="overlay d-flex justify-content-center align-items-center vh-100">
          <div className="container">
            <div className="row ">
              <div className="col-md-8 col-md-offset-2 intro-text ">
                <h1 >
                Tutoring
                  <span>@SFCCI</span>
                </h1>
                
                <Link
                  to='/find-a-tutor'
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Find a Tutor
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  
    <div className="content" id="features">
    <h2>Tutoring Coding Level 0</h2>
      <div className="card-container">
          {previousWork.map((page)=>(
              <div key={page.id} className="card" title={page.name}>
                  <h4 className="t text-bg-light rounded p-1">{page.name}</h4>
                  <Link to={page.link} className="card-list">
                  {page.icon}
              
                  </Link>
                  <span id='ribbon'><FaStar className="alig align-content-center text-bg-warning fw-bold w-25 p-0"/>25% Off </span>
              </div>
          ))}
      </div>
     
     <br/>
     <br/>
     <hr/>
    
    <Outlet/>
  </div>
  </>
 
);
}

export default Tutoring;

