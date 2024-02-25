import React from "react";
import '../Timer/Timer.scss';
import {CountdownCircleTimer} from 'react-countdown-circle-timer'

import { useState, useEffect} from "react";
import HomeHub from "../HomeHub/HomeHub";


const Timer = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [buttonLabel, setButtonLabel] = useState('Start');


    const handleStartStop = () => {
        setIsRunning(!isRunning);
        setButtonLabel(prevLabel => prevLabel === 'Start' ? 'Stop' : 'Start');
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

    const renderTime = ({ remainingTime }) => {
        const hoursLeft = Math.floor(remainingTime / 3600);
        const minutesLeft = Math.floor((remainingTime % 3600) / 60);
        const secondsLeft = remainingTime % 60;

        return (
            <div className="display">
                <span>{formatTime(hoursLeft)}</span>:
                <span>{formatTime(minutesLeft)}</span>:
                <span>{formatTime(secondsLeft)}</span>
            </div>
        );
    };

    const handleComplete = () => {
        setIsRunning(false);
    };

    return (
        <div className="countdown-timer">



            <div className="timer">
                {/* <CircleProgress percentage={percentage} /> */}
                <CountdownCircleTimer
                  isPlaying={isRunning}
                  duration={(hours * 3600) + (minutes * 60) + seconds}
                  // colors={[
                  //     ['#fefefe', 0.33],
                  //     ['#F7B801', 0.33],
                  //     ['#A30000', 0.34],
                  // ]}
  
                  colors="#37a862"
                  onComplete={handleComplete}
                  className="timer"
                    >
                  {renderTime}
                </CountdownCircleTimer>


            </div>

            
            <div className="input-container">
                <input className="input__time" type="number" value={hours} onChange={(e) => setHours(parseInt(e.target.value))} />
                <span className="input__title">hours</span>
                <input className="input__time" type="number" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value))} />
                <span className="input__title">minutes</span>
 
            </div>
            <div className="controls">
                <button className="button" onClick={handleStartStop}>{buttonLabel}</button>
                <button className="button" onClick={handleReset}>Reset</button>
            </div>

            <HomeHub></HomeHub>
        </div>
    );
};

export default Timer;