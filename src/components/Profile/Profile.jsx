import React from "react";
import "../../sass/style.scss";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className="profile">
            <ProfileInfo profileInfo={props.profileInfo}/>
            <PostsContainer />
        </div>
    )
}

export default Profile;