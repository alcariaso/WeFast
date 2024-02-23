import React from "react";
import '../Journal/Journal.scss';
import iconMood from '../../assets/icons/icon-mood.png';
import iconWater from '../../assets/icons/icon-water.png';
import iconBloodSugar from '../../assets/icons/icon-bloodSugar.png';
import iconActive from '../../assets/icons/icon-activity.png'
import iconMed from '../../assets/icons/icon-med.png'

const Journal = () => {

    return (

        <main className="journal">
            <h1 className="journal__title">Track Your Progress </h1>

            <div className="taskbox">

                <div class="checkbox-container">
                    <input type="checkbox" id="custom-checkbox"/>
                </div>

                <div className="task">
                    <img className="task__image" src={iconMood}></img>
                    <div className="task__container">
                        <h2 className="title">MOOD</h2>
                        <p className="text"></p>
                    </div>
                </div>
            </div>

            <div className="taskbox">

                <div class="checkbox-container">
                    <input type="checkbox" id="custom-checkbox"/>
                </div>

                <div className="task">
                    <img className="task__image" src={iconWater}></img>
                    <div className="task__container"><h2 className="title">WATER</h2>
                    <p className="text"></p></div>
                </div>
            </div>

            <div className="taskbox">

                <div class="checkbox-container">
                    <input type="checkbox" id="custom-checkbox"/>
                </div>

                <div className="task">
                    <img className="task__image" src={iconMed}></img>
                    <div className="task__container"><h2 className="title">MEDICINE</h2>
                    <p className="text"></p></div>
                </div>
            </div>

            <div className="taskbox">

                <div class="checkbox-container">
                    <input type="checkbox" id="custom-checkbox"/>
                </div>

                <div className="task">
                    <img className="task__image" src={iconActive}></img>
                    <div className="task__container"><h2 className="title">ACTIVITY</h2>
                    <p className="text"></p></div>
                </div>
            </div>

            <div className="taskbox">

                <div class="checkbox-container">
                    <input type="checkbox" id="custom-checkbox"/>
                </div>

                <div className="task">
                    <img className="task__image" src={iconBloodSugar}></img>
                    <div className="task__container"><h2 className="title">BLOOD SUGAR</h2>
                    <p className="text"></p></div>
                </div>
            </div>
        </main>

    )
}

export default Journal;