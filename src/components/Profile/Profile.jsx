import React from "react";
import "../../sass/style.scss";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    debugger;
    return (
        <div className="profile">
            <div className="profile-main">
                <div className="profile-main__img-wrapper">
                    <img className="profile-main__img" src="https://f1.24open.ru/XHTavd5Vvb.jpg" alt="" />

                </div>
                <div className="profile-main__name">
                    Ivan Ivanovchenkov
                </div>
            </div>

            <div className="profile-description">
                <p className="profile-description__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum, nisl at
                    commodo malesuada, sem est ultrices elit, at tempus justo odio a diam. Curabitur vel
                    ligula varius, porta purus nec, rutrum purus. Phasellus magna velit, malesuada nec
                    erat nec, ultricies posuere sem. Fusce porta massa ut accumsan bibendum. Ut turpis
                    libero, fermentum id vestibulum eget, mollis sed velit. Vivamus eu efficitur ex.
                    Duis maximus enim sit amet metus tincidunt, non hendrerit lectus suscipit. Etiam
                    aliquet cursus ante, quis fermentum neque vulputate eget. Maecenas consectetur
                    metus vitae massa facilisis, nec sodales lacus congue. Sed eleifend gravida orci
                    et porta. Vivamus eget ipsum neque. In hac habitasse platea dictumst. Morbi
                    condimentum tellus ipsum, ultricies laoreet sem placerat at.
                </p>
            </div>

            <Posts posts={props.profile.posts}/>
        </div>
    )
}

export default Profile;