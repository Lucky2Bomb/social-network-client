import React from "react";
import UserItem from "./UserItem/UserItem";

const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pagesItems = [];
    for (let i = 1; i <= pageCount; i++) {
        pagesItems = [...pagesItems, i];
    }
    return (
        <div>
            {props.userList.map(user => <UserItem user={user} follow={props.follow} unfollow={props.unfollow} />)}
            <div className="pages-nav-list">
                {pagesItems.map(pageNumber =>
                    <span
                        onClick={() => { props.onPostChanged(pageNumber) }}
                        className={props.currentPage === pageNumber ? "pages-nav-list__item_selected" : "pages-nav-list__item"}
                    >
                        {pageNumber}
                    </span>
                )}


            </div>
        </div>
    )
}

// {<span onClick={() => { onPostChanged(pageNumber);}}
//     className={props.currentPage === pageNumber ? "pages-nav-list__item_selected" : "pages-nav-list__item"}
//     {pageNumber}
// </span>})

export default Users;