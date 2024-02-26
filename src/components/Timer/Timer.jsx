import React from "react";
import '../Timer/Timer.scss';
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import SubHeader from '../SubHeader/SubHeader';
import { useState, useEffect} from "react";
import SubHomeHub from "../SubHomeHub/SubHomeHub";
import profileImg from '../../assets/images/priyanka-chopra.jpg'
import { Link } from "react-router-dom";


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
      <main>
        <SubHeader></SubHeader>
        
        <div className="countdown-timer">
          
            <div className="toggle">
              <Link to="/"><div className="toggle__circle"></div></Link>
            </div>

            <div className="profileView">
              <img className="prof-Img" src={profileImg}></img>
            </div>
     
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
                <span className="input__title">min</span>
 
            </div>
            <div className="controls">
                <button className="button" onClick={handleStartStop}>{buttonLabel}</button>
                <button className="button" onClick={handleReset}>Reset</button>
            </div>

            
          </div>

          <SubHomeHub></SubHomeHub>
        </main> 
    );
};

export default Timer;