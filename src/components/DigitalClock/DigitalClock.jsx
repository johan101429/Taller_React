
import React, { useState, useEffect } from 'react';
import './DigitalClock'

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    return (
        <div>
            <h2>Digital Clock</h2>
            <div>
                {formatTime(time.getHours())}:
                {formatTime(time.getMinutes())}:
                {formatTime(time.getSeconds())}
            </div>
        </div>
    );
};

export default DigitalClock;
