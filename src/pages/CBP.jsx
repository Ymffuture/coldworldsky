import React,{useState,useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Loader from "../componets/Loader";
const CBP = () => {
    const [onLoading , setOnLoading] =useState(true);

    useEffect(()=>{
      setTimeout(()=>{ setOnLoading(false)},5000)
    },[onLoading])
  return (
    <div className='container'>
        <h2>Compare prices</h2>
        <p>We have flexable pricing that will suit you budget.</p>
        {onLoading? <em className='container-fluid'> <Loader/> Please wait while we are loading the table ...</em>: <Outlet/>}
    </div>
  )
}

export default CBP
