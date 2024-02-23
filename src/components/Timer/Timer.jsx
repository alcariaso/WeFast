import React from "react";
import '../Timer/Timer.scss';
import TimerMain from "../TimerMain/TimerMain";
import { useState, useEffect ,useRef} from "react";


const Timer = () => {

    const [timeLeft, setTimeLeft] = useState({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    const progressIndicatorCircleRef = useRef([]);
  
    useEffect(() => {
      const hr = 0;
      const min = 0;
      const sec = 0;
  
      const hours = hr * 3600000;
      const minutes = min * 60000;
      const seconds = sec * 1000;
  
      const setTime = hours + minutes + seconds;
      const startTime = Date.now();
      const futureTime = startTime + setTime;
  
      const timerloop = setInterval(countDownTimer, 1000);
      countDownTimer();
  
      function countDownTimer() {
        const currentTime = Date.now();
        const remainingTime = futureTime - currentTime;
        const angle = (remainingTime / setTime) * 360;
  
        if (angle > 180) {
          progressIndicatorCircleRef.current[2].style.display = "none";
        } else {
          progressIndicatorCircleRef.current[2].style.display = "block";
        }
  
        progressIndicatorCircleRef.current[0].style.transform = `rotate(${
          angle > 180 ? 180 : angle
        }deg)`;
        progressIndicatorCircleRef.current[1].style.transform = `rotate(${angle}deg)`;
  
        const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((remainingTime / (1000 * 60)) % 60);
        const secs = Math.floor((remainingTime / 1000) % 60);
  
        setTimeLeft({
          hours: hrs,
          minutes: mins,
          seconds: secs,
        });
  
        if (remainingTime < 0) {
          clearInterval(timerloop);
          progressIndicatorCircleRef.current[0].style.display = "none";
          progressIndicatorCircleRef.current[1].style.display = "none";
          progressIndicatorCircleRef.current[2].style.display = "none";
        }
      }
  
      return () => {
        clearInterval(timerloop);
      };
    }, []); // Run once on component mount

    const TimerMainProps = {progressIndicatorCircleRef}
  
    return (
      <div className="timer">
        {/* progress indicator */}
        <TimerMain {...TimerMainProps}></TimerMain>
        <div className="progressIndicator timer">
          <div
            ref={(el) => (progressIndicatorCircleRef.current[0] = el)}
            className="progressIndicator__circle"
          ></div>
          <div
            ref={(el) => (progressIndicatorCircleRef.current[1] = el)}
            className="progressIndicator__circle"
          ></div>
          <div
            ref={(el) => (progressIndicatorCircleRef.current[2] = el)}
            className="progressIndicator__circle"
          ></div>
          <div className="progressIndicator__circle--outermost"></div>

        </div>

                <div className="progressIndicator timer">
                     <div className="progressIndicator__circle" ></div>
                     <div className="progressIndicator__circle" ></div>
                     <div className="progressIndicator__circle" ></div>
                     <div className="progressIndicator__circle--outermost"></div>
                </div>           
  
        <div>


          <button className="button">Start</button>
        </div>
      </div>
    );
  };
  
  export default Timer;