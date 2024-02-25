import React from "react";
import '../Journal/Journal.scss';
import iconMood from '../../assets/icons/icon-mood.png';
import iconWater from '../../assets/icons/icon-water.png';
import iconBloodSugar from '../../assets/icons/icon-bloodSugar.png';
import iconActive from '../../assets/icons/icon-activity.png'
import iconMed from '../../assets/icons/icon-med.png';
import { useState } from 'react';
import MoodSelector from '../Journal/MoodSelector/MoodSelector';
import { Link } from "react-router-dom";
import HomeHub from "../HomeHub/HomeHub";


const Journal = () => {
    const [selectedMood, setSelectedMood] = useState(null);
    const [isMoodSelectorOpen, setIsMoodSelectorOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // Add state variable to manage modal visibility
    
    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen);
      };
    
      const handleMoodSelect = (mood) => {
        setSelectedMood(mood);
        setIsMoodSelectorOpen(false);
      };
    
      const handleMoodSelectorToggle = () => {
        setIsMoodSelectorOpen(!isMoodSelectorOpen);
      };
    return (

        <main className="journal">
            <h1 className="journal__title">Track Your Progress </h1>

            <div className="taskbox " onClick={handleMoodSelectorToggle}>


                <div class="checkbox-container">
                    <input type="checkbox" id="custom-checkbox"/>
                </div>
                {isMoodSelectorOpen && (
                        <MoodSelector
                            onSelect={handleMoodSelect}
                            onClose={handleMoodSelectorToggle}
                        />
                    )}

                <div className="task">
                    <img className="task__image" src={iconMood}></img>
                    <div className="task__container" >
                        <h2 className="title" >MOOD</h2>
                        <p className="text">Feeling: {selectedMood || 'None'}</p>

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


            <HomeHub></HomeHub>
        </main>

    )
}

export default Journal;