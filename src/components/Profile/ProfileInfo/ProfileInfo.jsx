import React from "react";
import "../../../sass/style.scss";
import Spinner from "../../common/Spinner/Spinner";

const ProfileInfo = (props) => {
    if (!props.profileInfo) {
        return (
            <div className="profile-info">
                <Spinner />
            </div>
        )
    }

    let contacts = props.profileInfo.contacts;

    return (
        <div className="profile-info">
            <div className="profile-info-main">
                <div className="profile-info-main__img-wrapper">
                    <img className="profile-info-main__img" src={props.profileInfo.photos.large} alt="" />

                </div>
                <div className="profile-info-main__name">
                    {props.profileInfo.fullName}
                </div>
            </div>
            <div className="profile-info-description">
                <div className="profile-info-description__heading">
                    about me
                </div>
                <p className="profile-info-description__text">
                    {props.profileInfo.aboutMe}
                </p>
                <div className="profile-info-description__heading">
                    contacts
                </div>
                <div className="profile-info-description__container">
                    <div className="profile-info-description__container--keys">
                        {Object.entries(contacts).map(contact => (
                            <div className="profile-info-description__container--keys__item">{contact[0]}</div>
                        ))}
                    </div>

                    <div className="profile-info-description__container--values">
                        {Object.entries(contacts).map(contact => (
                            <div className="profile-info-description__container--values__item">{contact[1] === null ? "-" : contact[1]}</div>
                        ))}
                    </div>
                </div>
                <div className="profile-info-description__heading">
                    job
                </div>
                <div className="profile-info-description__container">
                    <div className="profile-info-description__container--keys">
                        <div className="profile-info-description__container--keys__item">looking for a job</div>
                        <div className="profile-info-description__container--keys__item">looking for a job description</div>
                    </div>

                    <div className="profile-info-description__container--values">
                        <div className="profile-info-description__container--values__item">{props.profileInfo.lookingForAJob ? "yes" : "no"}</div>
                        <div className="profile-info-description__container--values__item">{props.profileInfo.lookingForAJobDescription}</div>
                    </div>
                </div>
            </div>

            {/* <div className="profile-info-main">
                <div className="profile-info-main__img-wrapper">
                    <img className="profile-info-main__img" src="https://f1.24open.ru/XHTavd5Vvb.jpg" alt="" />

                </div>
                <div className="profile-info-main__name">
                    Ivan Ivanovchenkov
                </div>
            </div>

            <div className="profile-info-description">
                <p className="profile-info-description__text">
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
            </div> */}
        </div >
    )
}

export default ProfileInfo;