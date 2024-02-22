import React from "react";
import '../Nutrition/Nutrition.scss';

const Nutrition = () => {

    return (
     <main className="nutrition">

        <h1 className="nutrition__title">Let's Keep it Healthy</h1>

        <div className="button">
            <button className="button__food"></button>
            <button className="button__drinks"></button>
        </div>

     </main>
    )
}

export default Nutrition;