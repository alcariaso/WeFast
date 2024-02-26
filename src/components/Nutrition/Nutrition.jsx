import React from "react";
import '../Nutrition/Nutrition.scss';
import HomeHub from "../HomeHub/HomeHub";
import { Link } from "react-router-dom";

const Nutrition = () => {

    return (
     <main className="nutrition">

        <div className="nutrition__background"></div>

        <h1 className="nutrition__title">Let's Keep it Healthy!</h1>

        <div className="button">
            <Link to="/NutritionFood"><button className="button__food">F O O D</button></Link>
            <button className="button__drinks">D R I N K S</button>
        </div>
        <HomeHub></HomeHub>

     </main>
    )
}

export default Nutrition;