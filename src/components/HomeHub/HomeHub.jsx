import React from "react";
import '../HomeHub/HomeHub.scss';
import iconHome from '../../assets/icons/icon-timer.png';
import iconCommunity from '../../assets/icons/icon-community2.png';
import iconActivity from '../../assets/icons/icon-activity2.png';
import iconProfile from '../../assets/icons/icon-activity2.png';
import iconFood from '../../assets/icons/icon-foodNutrition.png'


const HomeHub = () => {

    return (

       <nav className="homeNav">

            <div className="homeNav__container">
                
                <img className="nav" src={iconHome}></img>
                <img className="nav" src={iconActivity}></img>
                <img className="nav" src={iconFood}></img>
                <img className="nav" src={iconCommunity}></img>
                <img className="nav" src={iconProfile}></img>   
            </div>
            
       </nav>
    )
}

export default HomeHub