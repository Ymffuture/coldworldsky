import React,{useState, useEffect }  from "react";
import {Link ,Outlet} from 'react-router-dom';
import { FaBacterium, FaBrain, FaCalculator,  FaStar} from 'react-icons/fa';
import Loader from "../componets/Loader";

const Subjects = () => {

    const [onLoading , setOnLoading] =useState(true);

    useEffect(()=>{
      setTimeout(()=>{ setOnLoading(false)},10000)
    },[onLoading])
    const previousWork = [
        {id:'1', name:'Mathematics / lit', link:'/tutoring/subjects/Mathematics', icon:<FaCalculator/>,price:340},
        {id:'2', name:'Physical science', link:'/tutoring/subjects/Physical-science', icon: <FaBrain/>
            ,price:300
        },
        {id:'3', name:'Life sciences', link:'/tutoring/subjects/Life-sciences', icon:<FaBacterium/> ,price:250},
    ];

    return (
        <div className="content">
            <div className="card-container">
                {previousWork.map((page)=>(
                    <div key={page.id} className="card" title={page.name}>
                        <h4 className="t text-bg-light rounded p-1">{page.name}</h4>
                        <Link to={page.link} className="card-list">
                        {page.icon} {''}
                        R{page.price}
                        </Link>
                        <span id='ribbon'><FaStar className="alig align-content-center text-warning fw-bold w-25 p-0"/>25% Off </span>
                    </div>
                ))}
            </div>
            <p>

                <br/>
            </p>
          {onLoading? <em> <Loader/> Please wait while we are loading subjects ...</em>: <Outlet/>}
      
        

        </div>
    );
};

export default Subjects;
