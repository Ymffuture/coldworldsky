import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaCheckDouble, FaFolderOpen, FaSave, FaTimesCircle, } from 'react-icons/fa';
const TrackApplication = () => {
    // const [progress , setProgress] = useState(0)
    const [status , setStatus] = useState('')
   const progress = .70
useEffect(()=>{

    if(progress <= 0.2){
        setStatus(<p className='text-dark'>Submitted</p>)
    }
    if(progress >= 0.21){
        setStatus(<p className='text-warning'>In progress</p>)
    }
    if(progress >= 0.6){
        setStatus(<p className='text-success'>Accepted Application</p>)
    }
    if(progress >= .95){
        setStatus(<p>Rejected <br/><br/> Reason:<b className='text-danger'> Missing document/Did not meet the requirements</b> </p>)
    }
},[progress])


  return (
    <div className='container'>
        Track Application ID: XXXXXXXX
<div className='bar container'>
    <i className='bar-icon'><FaSave className='text-warning i'/></i>
    <i className='bar-icon2'><FaFolderOpen className='text-success i'/></i>
    <i className='bar-icon3'><FaTimesCircle className='text-secondary i'/></i>
    <i className='bar-icon4 '><FaCheckDouble className='text-success i'/></i>
    <progress value={progress} onWaiting={true} className='progress-width progress-bar' />
</div>
<div>
    <p className='p-5 fw-bold bg-light rounded d-flex'>Status: {' '} {''} {status}</p>
</div>
    </div>
  )
}

export default TrackApplication