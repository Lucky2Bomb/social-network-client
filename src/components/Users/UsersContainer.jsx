import React from "react";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/UsersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);