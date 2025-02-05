import React, { useState } from 'react'

const Counter = () => {
    const [counter,setCounter] = useState(1);
    const increase = () => {
        setCounter(counter + 1);
    };

    const decrease = () => {
        setCounter(counter - 1);
    };
    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default Counter