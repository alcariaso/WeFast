import React from "react";
import '../NutritionFood/NutritionFood.scss'
import Heart from "@react-sandbox/heart";
import { useState } from "react";
import Recipe from './Recipe/Recipe';
import iconBackArrow from '../../../assets/icons/icon-backArrow.png'
import ImageSlider from '../ImageSlider/ImageSlider';
import { Link } from "react-router-dom";


const NutritionFood = () => {

    const [active, setActive] = useState(false)

    return (
        <main className="food">

            <div className="container">
                <Link to='/Nutrition'><img className="navBack" src={iconBackArrow}></img></Link>
            </div>

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

            <h1>Breakfast Ideas</h1>
            <section className="recipe">
            <Recipe></Recipe>
            </section>

    

        </main>
    )
}

export default NutritionFood 