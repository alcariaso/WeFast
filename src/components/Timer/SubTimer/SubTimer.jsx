import React from "react";
import '../SubTimer/SubTimer.scss';
import {CountdownCircleTimer} from 'react-countdown-circle-timer';
import profileImg from '../../../assets/images/priyanka-chopra.jpg';
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import HomeHub from "../../HomeHub/HomeHub";
import Header from '../../Header/Header';

const TimerMain = () => {
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
            <Header></Header>
            <div className="subcountdown-timer">

            <div className="toggle">
              <Link to="/SubTimer"><div className="toggle__circle"></div></Link>
            </div>

            <div className="profileView">
              <img className="prof-Img" src={profileImg}></img>
            </div>



            <div className="subtimer">
                {/* <CircleProgress percentage={percentage} /> */}
                <CountdownCircleTimer
                  isPlaying={isRunning}
                  duration={(hours * 3600) + (minutes * 60) + seconds}
                  // colors={[
                  //     ['#fefefe', 0.33],
                  //     ['#F7B801', 0.33],
                  //     ['#A30000', 0.34],
                  // ]}
  
                  colors="#1b9956"
                  onComplete={handleComplete}
                  className="timer"
                    >
                  {renderTime}
                </CountdownCircleTimer>


            </div>

            
            <div className="subinput-container">
                <input className="subinput__time" type="number" value={hours} onChange={(e) => setHours(parseInt(e.target.value))} />
                <span className="subinput__title">hours</span>
                <input className="subinput__time" type="number" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value))} />
                <span className="subinput__title">minutes</span>
 
            </div>
            <div className="subcontrols">
                <button className="subbutton" onClick={handleStartStop}>{buttonLabel}</button>
                <button className="subbutton" onClick={handleReset}>Reset</button>
            </div>
        </div>
        <HomeHub></HomeHub>
        </main>
    );
};

export default TimerMain;