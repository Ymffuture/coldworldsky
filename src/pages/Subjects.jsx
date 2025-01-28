import React from "react";
import {Link ,Outlet} from 'react-router-dom';
import { FaArrowRight, FaBacterium, FaBrain, FaCalculator, FaDoorOpen, FaPercentage, FaStar} from 'react-icons/fa';

const Subjects = () => {
    const previousWork = [
        {id:'1', name:'Mathematics / lit', link:'/tutoring/subjects/Mathematics', icon:<FaCalculator/>},
        {id:'2', name:'Physical science', link:'/tutoring/subjects/Physical-science', icon: <FaBrain/>},
        {id:'3', name:'Life sciences', link:'/tutoring/subjects/Life-sciences', icon:<FaBacterium/>},
    ];

    return (
        <div className="content">
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
    );
};

export default Subjects;
