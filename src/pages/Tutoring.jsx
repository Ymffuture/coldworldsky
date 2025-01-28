import React ,{useEffect, useState} from "react";
import {Link ,Outlet} from 'react-router-dom';
import { FaArrowRight, FaBacterium, FaBrain, FaCalculator, FaCss3, FaDoorOpen, FaHtml5, FaJs, FaStar} from 'react-icons/fa';
const Tutoring = () => {

  const [setLink, setSetLink] = useState('')
  const previousWork = [
    {id:'1', name:'HTML', link:'/tutoring/subjects/Mathematics', icon:<FaHtml5/>},
    {id:'2', name:'CSS', link:'/tutoring/subjects/Physical-science', icon: <FaCss3/>},
    {id:'3', name:'JavaScript', link:'/tutoring/subjects/Life-sciences', icon:<FaJs/>},
    
];

const count = new Date().getSeconds()

useEffect(()=>{
const count = new Date().getSeconds()
setTimeout(()=>{
  if(count<25){
    setSetLink('/tutoring/subjects/Life-sciences/find-a-tutor')
  }
  if(count>50){
    setSetLink('/tutoring/subjects/Physical-science/find-a-tutor')
  }
  else{
    setSetLink('/tutoring/subjects/Life-sciences/find-a-tutor') 
  }
},5000)

},[count])
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
                   <FaArrowRight/> <FaDoorOpen/>
                  </Link>
                  <span id='ribbon'><FaStar className="alig align-content-center text-bg-warning fw-bold w-25 p-0"/>25% Off </span>
              </div>
          ))}
      </div>
      <p className="text-bg-warning rounded mt-4">Note that the tutor will retire 2026 so that will cost for each class for 1hr.</p>
      <ul className="fa fa-angle-double-down">
      <li className="fa-arrow-circle-right">Mathematics</li>
      <li className="bg-gray alert fa-arrow-circle-right">Sciences</li>
    </ul>
    <Outlet/>
  </div>
  </>
 
);
}

export default Tutoring;

