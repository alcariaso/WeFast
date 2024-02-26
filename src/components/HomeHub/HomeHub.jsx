import React from "react";
import '../HomeHub/HomeHub.scss';
import iconHome from '../../assets/icons/icon-timer.png';
import iconCommunity from '../../assets/icons/icon-community2.png';
import iconActivity from '../../assets/icons/icon-activity2.png';
import iconProfile from '../../assets/icons/icon-user2.png';
import iconFood from '../../assets/icons/icon-foodNutrition.png'
import { Link } from "react-router-dom";

const HomeHub = () => {

    return (

       <nav className="homeNav">

            <div className="homeNav__container">
                
                <Link to="/"><img className="nav" src={iconHome}></img></Link>
                <Link to="/Nutrition" ><img className="nav" src={iconFood}></img></Link>
                <Link to="/Journal" ><img className="nav" src={iconActivity}></img></Link>
                <Link to="/Community" ><img className="nav" src={iconCommunity}></img></Link>
                <Link to="/Profile" ><img className="nav" src={iconProfile}></img>   </Link>
            </div>
            
       </nav>
    )
}

export default HomeHub