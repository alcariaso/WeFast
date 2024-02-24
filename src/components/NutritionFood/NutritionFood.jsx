import React from "react";
import '../NutritionFood/NutritionFood.scss'
import Heart from "@react-sandbox/heart";
import { useState } from "react";
import item1 from '../../assets/foodImages/food-item-1.jpg'
import item2 from '../../assets/foodImages/food-item-2.jpg'
import item3 from '../../assets/foodImages/food-item-3.jpg'
import item4 from '../../assets/foodImages/food-item-4.jpg'
import item5 from '../../assets/foodImages/food-item-5.jpg'

const NutritionFood = () => {

    const [active, setActive] = useState(false)

    return (
        <main className="food">
            <div className="subHeader">
                <h1 className="subHeader__title">Healthy Picks! </h1>
                <div className='foodOption'>
                    <p className='options'>Breafast</p>
                    <p className='options'>Lunch</p>
                    <p className='options'>Dinner</p>
                </div>
            </div>

            <section className="food__feature">
                <div className="feature__container">
                    <img className="f_img" src={item1}></img>
                    <img className="f_img" src={item2}></img>

                </div>
                <Heart
                    width={24}
                    height={24}
                    active={active}
                    onClick={() => setActive(!active)}
                />
            </section>

            <section className="food__list">
                <div className="container">
                    <img className="item__img" src={item3}></img>
                    <Heart
                        width={24}
                        height={24}
                        active={active}
                        onClick={() => setActive(!active)}
                    />
                </div>

            </section>

        </main>
    )
}

export default NutritionFood 