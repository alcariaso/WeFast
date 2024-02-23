import React from "react";
import '../Nutrition/Nutrition.scss';

const Nutrition = () => {

    return (
     <main className="nutrition">

        <div className="nutrition__background"></div>

        <h1 className="nutrition__title">Let's Keep it Healthy!</h1>

        <div className="button">
            <button className="button__food">F O O D</button>
            <button className="button__drinks">D R I N K S</button>
        </div>

     </main>
    )
}

export default Nutrition;