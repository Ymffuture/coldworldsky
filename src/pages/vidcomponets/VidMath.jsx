import React from 'react'
import VideoA from '../../assets/vidmp4/math/Component 1 - Fractions.mp4';

const VidMath = () => {
  return (
    <div className='container clip'>
   
      <video controls style={{ width: 400, height: 'auto' }}  aspectRatio="16by9" > 
        <source src={VideoA} />
      </video>
    </div>
  )
}

export default VidMath;
