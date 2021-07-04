import React, { useCallback, useEffect, useRef, useState } from 'react';

//React Hook 
const SimpleHabit = props => {
    const [count,setCount] = useState(0);
    const spanRef = useRef(); 

    const handleIncrement = useCallback(() => {
        console.log('handling increment');
        setCount(count + 1);
    });

    const handleDecrement =useCallback(() => {
        console.log('handling decrement');
        setCount(count-1);
    });

    useEffect(() => {
        console.log(`mounted and updated! ${count}`);
    }, [count]);

    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement}>
            <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={handleDecrement}>
            <i className="fas fa-minus-square"></i>
            </button>
        </li>
    );

}

export default SimpleHabit;






