import React from "react";
import '../Journal/Journal.scss';

const Journal = () => {

    return (

        <main className="journal">
            <div className="task">
                <h2 className="task__title">MOOD</h2>
                <p className="task__text"></p>
            </div>
            <div className="task">
                <h2 className="task__title">WATER</h2>
                <p className="task__text"></p>
            </div>
            <div className="task">
                <h2 className="task__title">MEDICINE</h2>
                <p className="task__text"></p>
            </div>
            <div className="task">
                <h2 className="task__title">ACTIVITY</h2>
                <p className="task__text"></p>
            </div>
            <div className="task">
                <h2 className="task__title">BLOOD SUGAR</h2>
                <p className="task__text"></p>
            </div>
        </main>

    )
}

export default Journal;