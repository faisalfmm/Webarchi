// HomePage.js
import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = ({ end, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000; // duration in milliseconds for the animation
        const incrementTime = Math.floor(duration / end);
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) {
                clearInterval(timer);
            }
        }, incrementTime);
    }, [end]);

    return (
        <div className="counter">
            <h1>{count}</h1>
            <p>{label}</p>
        </div>
    );
};
            <div className="counter-section">
                <Counter end={24} label="Years" />
                <Counter end={22} label="Members" />
                <Counter end={92} label="Projects" />
                <Counter end={43} label="Awards" />
            </div>

export default Counter;
