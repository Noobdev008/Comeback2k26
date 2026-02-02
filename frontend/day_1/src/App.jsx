import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount]= useState(0);
  const increment =()=>{
    setCount(count+1)
  }
    const decrement =()=>{
      if(count>=1){
        setCount(count-1)
      }

  }

  useEffect(()=>{
    console.log("count change : " + count)
  },[count])


  return (
    <>
      <div>
        Counter
      </div>
      <div>
        {count}
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
      
    </>
  )
}

export default App
