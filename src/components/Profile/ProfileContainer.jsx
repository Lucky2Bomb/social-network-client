import React from "react";
import Profile from "./Profile";
import { useEffect } from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/ProfileReducer";
import { withRouter } from "react-router-dom";

const ProfileContainer = (props) => {

    useEffect(() => {
        let userId = props.match.params.userId ? props.match.params.userId : 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            props.setUserProfile(response.data);
            // props.toggleIsLoading(false);
            // props.setUsers(response.data.items);
            // props.setTotalUsersCount(response.data.totalCount);
        });
    }, []);
    return (
        <Profile props={props} profileInfo={props.profileInfo}/>
    )
}

// let mapStateToProps = (state) => {
//     console.log(state);
//     return ({
//     profile: state.profile.profile
// })};

let mapStateToProps = (state) => ({
    profileInfo: state.profile.profileInfo
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile
})(withUrlDataContainerComponent);