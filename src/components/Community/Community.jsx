import React from "react";
import '../Community/Community.scss';
import iconAdd from'../../assets/icons/icon-add.png';
import Heart from "@react-sandbox/heart";
import foodImg from '../../assets/images/food.jpg'
import { useState } from "react";
import profileImg from '../../assets/images/priyanka-chopra.jpg';
import sucessGif from '../../assets/images/firework.gif';
import weighttGif from '../../assets/images/weight-scale.gif'
import HomeHub from "../HomeHub/HomeHub";

const Community = () => {
    const [active, setActive] = useState(false)

    return (

        <main className="community">

            <div className="feedHeader">
                <h1 className="feedHeader__title">UL I V E Updates!</h1>
            </div>

            <div className="feed">

                <div className="feed__top">
                    <div className="profile">
                        <img className="profile__img" src={profileImg}></img>
                        <h3 className="profile__title">Priyanka Chopra</h3>
                    </div>
                    <p className="count">4 Days Fasting</p>
                </div>

                <div className="feed__main">
                    <img className="body" src={foodImg}></img>
                </div>

                <div className="feed__bottom">
                    {/* <img className="resBtn" src={iconHeart}></img> */}
                    <Heart
                    inactiveColor="#2f3131"
                    strokeWidth={50}
                        width={34}
                        height={34}
                        active={active}
                        onClick={() => setActive(!active)}
                    />
                    <img className="resBtn" src={iconAdd}></img>
                </div>

                <div className="feed__top">
                    <div className="profile">
                        <img className="profile__img" src={profileImg}></img>
                        <h3 className="profile__title">Priyanka Chopra</h3>
                    </div>
                    <p className="count">4 Days Fasting</p>
                </div>

                <div className="feed__main">
                    <p className="text">Week 1 <span className="text--isCompleted">Goal Reached!</span></p>
                    <img className="body--img" src={sucessGif}></img>
                </div>

                <div className="feed__bottom">
                    {/* <img className="resBtn" src={iconHeart}></img> */}
                    <Heart
                    inactiveColor="#2f3131"
                    strokeWidth={50}
                        width={34}
                        height={34}
                        active={active}
                        onClick={() => setActive(!active)}
                    />
                    <img className="resBtn" src={iconAdd}></img>
                </div>

                <div className="feed__top">
                    <div className="profile">
                        <img className="profile__img" src={profileImg}></img>
                        <h3 className="profile__title">Priyanka Chopra</h3>
                    </div>
                    <p className="count">4 Days Fasting</p>
                </div>

                <div className="feed__main">
                    <p className="text">Week 2 Weight Loss <span className="text--isCompleted">3 lbs!</span></p>
                    <img className="body--img" src={weighttGif}></img>
                </div>

                <div className="feed__bottom">
                    {/* <img className="resBtn" src={iconHeart}></img> */}
                    <Heart
                    inactiveColor="#2f3131"
                    strokeWidth={50}
                        width={34}
                        height={34}
                        active={active}
                        onClick={() => setActive(!active)}
                    />
                    <img className="resBtn" src={iconAdd}></img>
                </div>

            </div>
            <HomeHub></HomeHub>
        </main>
   )
}

export default Community