import React from 'react'

const Location = () => {
  return (
    <div className='map container fw-bold text-center'>
        <p> Google Map</p>
     <em>Not available::Tjovitjo phase 2 not found</em>

<br/>
<div className='btn-group lowbtn mb-4'>

<button className='btn' type='button'><img width='10%' src='/img/logosk.jpg' alt='logo'/> SkyfordCCI App</button>
<button className='btn ' type='button'>Google Maps</button>
<div className='btn-group lowbtn'>
<button className='btn btn-2 dropdown-toggle' data-toggle='dropdown' type='button'>Back to <span className='caret'></span></button>
<ul className='dropdown-menu' role='menu'>
   <li><a href='#'>Home</a></li> 
   <li>About locaction</li>
   <li>Contact Us</li>
</ul>
</div>
</div>
     <div className='progress '>
        <div className='progress-bar progress-bar-success progress-bar-striped activebar' role='progressbar' aria-valuenow='83' aria-valuemin='0'
        aria-valuemax='100' style={{width:'83%'}}>
     loading buttuns
        </div>
     </div>


    </div>
  )
}

export default Location;
