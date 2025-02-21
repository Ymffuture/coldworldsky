import React,{useEffect , useState} from 'react'

const Counter = () => {
    const [count , setCount] =useState(0)

    useEffect(()=>{
        const storedCount =localStorage.getItem('pageVisits');
        const initialCount = Number(storedCount) || 0;
        setCount(initialCount +1);
        localStorage.setItem('pageVisits' , initialCount+1);
    },[])
  return (
    <div className='count' >
        
       I have been visited <b>{count}</b> times
        
        </div>
  )
}

export default Counter