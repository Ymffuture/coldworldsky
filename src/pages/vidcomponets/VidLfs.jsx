import React from 'react'
import VideoA from '../../assets/vidmp4/LFS/meiosis.mp4';

const VidLfs = () => {
  return (
    <div className='container clip'>
   
      <video controls style={{ width: 400, height: 'auto' }}  aspectRatio="16by9" > 
        <source src={VideoA} />
      </video>
    </div>
  )
}

export default VidLfs;
