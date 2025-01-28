import React from 'react'

const Greet = () => {

  const getTime = () =>{
    const hrs = new Date().getHours();
    if(hrs<12) return 'Good Morning'
    else if(hrs<18) return 'Good Afternoon'
    else return 'Good Evening'
  };
      
  return (
    <div className='p-2 m-2 bg-info-subtle text-uppercase justify-content-center align-content-center d-flex fw-bold'>
      {getTime()}
    </div>
  )
}

export default Greet
