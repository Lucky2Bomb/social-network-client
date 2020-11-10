import React from "react";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/UsersReducer";
import Users from "./Users";
import * as axios from "axios";
import { useEffect } from "react";

export const UsersAPIContainer = (props) => {
    const getServerURL = (currentPage, pageSize) => `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`;

    useEffect(() => {
        axios.get(getServerURL(props.currentPage, props.pageSize)).then(response => {
            props.setUsers(response.data.items);
            props.setTotalUsersCount(response.data.totalCount);
        });
        // alert("useEffect");
    }, []);


    const onPostChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        axios.get(getServerURL(pageNumber, props.pageSize)).then(response => {
            props.setUsers(response.data.items);
        });
    }

    return (
        <Users
            userList={props.users}
            follow={props.follow}
            unfollow={props.unfollow}
            onPostChanged={onPostChanged}
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
        />
    )
}

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);