import React from "react";
import '../NutritionFood/NutritionFood.scss'
import Heart from "@react-sandbox/heart";
import { useState } from "react";
import Recipe from '../Recipe/Recipe';

import ImageSlider from '../ImageSlider/ImageSlider';


const NutritionFood = () => {

    const [active, setActive] = useState(false)

    return (
        <main className="food">
            <div className="foodHeader">
                <h1 className="foodHeader__title">Healthy Picks! </h1>
                <div className='foodOption'>
                    <p className='options'>Breafast</p>
                    <p className='options'>Lunch</p>
                    <p className='options'>Dinner</p>
                </div>
            </div>
         
            <section className="food__feature">
            <ImageSlider></ImageSlider>
            </section>


            <section className="background">
                <div className="">

                </div>

            </section>

            <h1> Healthy Picks</h1>
            <section className="recipe">
            <Recipe></Recipe>
            </section>

          


            {/* <section className="food__list">
                <div className="container">
                    <img className="item__img" src={item5}></img>
                    <Heart
                        width={24}
                        height={24}
                        active={active}
                        onClick={() => setActive(!active)}
                    />
                </div>
            </section> */}

        </main>
    )
}

export default NutritionFood 