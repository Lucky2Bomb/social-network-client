import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsLoading } from "../../redux/UsersReducer";
import Users from "./Users";
import * as axios from "axios";
import { useEffect } from "react";
import Spinner from "../common/Spinner/Spinner";

export const UsersAPIContainer = (props) => {
    useEffect(() => {
        props.toggleIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`).then(response => {
            props.toggleIsLoading(false);
            props.setUsers(response.data.items);
            props.setTotalUsersCount(response.data.totalCount);
        });
    }, []);


    const onPostChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.toggleIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`).then(response => {
            props.toggleIsLoading(false);
            props.setUsers(response.data.items);
        });
    }

    return (
        <>
            {props.isLoading ? <Spinner /> : <></>}
            <Users
                userList={props.users}
                follow={props.follow}
                unfollow={props.unfollow}
                onPostChanged={onPostChanged}
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
            />
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isLoading: state.users.isLoading
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsLoading: (isLoading) => {
//             dispatch(toggleIsLoadingAC(isLoading));
//         },
//     }
// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsLoading,
})(UsersAPIContainer);