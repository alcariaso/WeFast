import React from "react";
import '../SubHomeHub/SubHomeHub.scss';
import iconHome from '../../../assets/icons/icon-timer.png';
import iconCommunity from '../../../assets/icons/icon-community2.png';
import iconActivity from '../../../assets/icons/icon-activity2.png';
import iconProfile from '../../../assets/icons/icon-user2.png';
import iconFood from '../../../assets/icons/icon-foodNutrition.png'
import { Link } from "react-router-dom";

const SubHomeHub = () => {

    return (

       <nav className="SubhomeNav">

            <div className="SubhomeNav__container">
                
                <Link to="/"><img className="Subnav" src={iconHome}></img></Link>
                <Link to="/Nutrition" ><img className="Subnav" src={iconFood}></img></Link>
                <Link to="/Journal" ><img className="Subnav" src={iconActivity}></img></Link>
                <Link to="/Community" ><img className="Subnav" src={iconCommunity}></img></Link>
                <Link to="/" ><img className="Subnav" src={iconProfile}></img>   </Link>
            </div>
            
       </nav>
    )
}

export default SubHomeHub