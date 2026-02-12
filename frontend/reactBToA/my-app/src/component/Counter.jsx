import { useState } from "react";

function Counter(props){
    const [counter, setCounter]= useState(0);

    const progressiveCounter = (e)=>{
        e.preventDefault();
        setCounter(counter+1)
    }
    const decresingCounter = (e)=>{
        e.preventDefault();
        if(counter<=0){
            return 0
        }
        setCounter(counter-1)
    }

    return (
        <>
            <div>{counter}</div>
            <button onClick={progressiveCounter}>+</button>
             <button onClick={decresingCounter}>-</button>
        </>
    )
}

export default Counter