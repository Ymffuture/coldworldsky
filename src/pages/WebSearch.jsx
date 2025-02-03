import React, { useState } from 'react'

const WebSearch = () => {
    const [userQuery , setUserQuery] = useState()
    const serachUserQuery =()=>{
        window.open(`https://google.com/search?q=${userQuery}`)
    }
  return (
    <div>
<input type='text' value={userQuery} onChange={(e)=>{setUserQuery(e.target.value)}}/>
<button onClick={serachUserQuery}>seach...</button>
    </div>
  )
}

export default WebSearch