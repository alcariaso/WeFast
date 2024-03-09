import React from "react";
import './TimerMain.scss';

import { useState, useEffect} from "react";

const TimerMain = ({progressIndicatorCircleRef}) => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                } else {
                    if (minutes > 0) {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    } else {
                        if (hours > 0) {
                            setHours(hours - 1);
                            setMinutes(59);
                            setSeconds(59);
                        } else {
                            clearInterval(intervalId);
                            setIsRunning(false);
                        }
                    }
                }
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, hours, minutes, seconds]);

    const handleStartStop = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setIsRunning(false);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
    };

    const formatTime = (value) => {
        return value < 10 ? `0${value}` : `${value}`;
    };

    return (
        <div className="countdown-timer">
            <div className="input-container">
                <input type="number" value={hours} onChange={(e) => setHours(parseInt(e.target.value))} />
                <span>hours</span>
                <input type="number" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value))} />
                <span>minutes</span>
                <input type="number" value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value))} />
                <span>seconds</span>
            </div>
            <div className="controls">
                <button onClick={handleStartStop}>{isRunning ? 'Pause' : 'Start'}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <div className="display">
                <span>{formatTime(hours)}</span>:
                <span>{formatTime(minutes)}</span>:
                <span>{formatTime(seconds)}</span>
            </div>
        </div>
    );
};
export default TimerMain 