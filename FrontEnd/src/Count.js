import React,{useEffect, useState} from 'react'

const Count = () => {
const [count, setCount]=useState(()=>{
    const saveCount=localStorage.getItem('count');
    return saveCount !=null ? parseInt(saveCount,10):0;
});

useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

const handleIncrement=()=>{
    setCount(count+1);
}
const handleDecrement=()=>{
    setCount(count-1);
}

  return (
    <div>
        <button onClick={handleIncrement}>+</button>
        <h1>Count:{count}</h1>
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Count