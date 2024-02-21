import React from "react";
import '../Timer/Timer.scss';

const Timer = () => {

    // const progressIndicator__circle = document.querySelectorAll('progresIndicator__circle');

    // const hr = 0;
    // const min = 0;
    // const sec = 0;

    // const hours = hr * 3600000
    // const minutes = min * 60000;
    // const seconds = sec * 1000;

    // const setTime = hours + minutes +seconds;
    // const startTime = Date.now();
    // const futureTime = startTime + setTime

    // const timerloop = setInterval(countDownTimer);
    // countDownTimer();

    // function countDownTimer () {

    //     const currenTime = Date.now();
    //     const remainingTime = futureTime - currenTime;
    //     const angle = (remainingTime / setTime) * 360;

    //     //progress indicator 

    //     if (angle > 180) {
    //         progressIndicator__circle
    //     }

    // }





    return (

       <div className="timer">
        {/* progress indicator */}
            <div className="progressIndicator timer">
                <div className="progressIndicator__circle">Hello</div>
                <div className="progressIndicator__circle"></div>
                <div className="progressIndicator__circle">Hello</div>
                <div className="progressIndicator__circle--outermost"></div>
            </div>

            <div>
                <button className="button">BStart</button>
            </div>

       </div>
    )
}

export default Timer