import React from "react";
import '../Community/Community.scss';

const Community = () => {

    return (

        <main className="community">

            <div className="feed">

                <div className="feed__Top">
                    <div className="profile">
                        <img className="profile__img"></img>
                        <h3 className="profile__title"></h3>
                    </div>
                </div>

                <div className="feed__Main">
                    <img className="body"></img>
                </div>

                <div className="feed__Bottom">
                    <img className="resBtn" src=""></img>
                    <img className="resBtn" src=""></img>
                </div>

            </div>

        </main>
   )
}

export default Community