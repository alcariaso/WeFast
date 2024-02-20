import React from "react";
import '../Timer/Timer.scss';

const Timer = () => {

    return (

       <div className="timer">
        {/* progress indicator */}
            <div className="progressIndicator">
                <div className="progressIndicator__circle"></div>
                <div className="progressIndicator__circle"></div>
                <div className="progressIndicator__circle"></div>
                <div className="progressIndicator__circle--outermost"></div>
            </div>

       </div>
    )
}

export default Timer