import React from "react";
import UserItem from "./UserItem/UserItem";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([{
            id: 0,
            name: "Nikolai Drozdov",
            avatarUrl: "https://get.wallhere.com/photo/1920x1200-px-807359.jpg",
            location: {
                country: "Russia",
                city: "Moscow",
            },
            status: "I like pythons!",
            isFollow: false,
        }, {
            id: 1,
            name: "Anna Karenina",
            avatarUrl: "https://get.wallhere.com/photo/1920x1200-px-807359.jpg",
            location: {
                country: "Russia",
                city: "Saint Petersburg",
            },
            status: "I write new book...",
            isFollow: true,
        }, {
            id: 2,
            name: "Ilya Pressov",
            avatarUrl: "https://get.wallhere.com/photo/1920x1200-px-807359.jpg",
            location: {
                country: "Russia",
                city: "Krasnodar",
            },
            status: "I drive new car!",
            isFollow: false,
        }, {
            id: 3,
            name: "San Diego",
            avatarUrl: "https://get.wallhere.com/photo/1920x1200-px-807359.jpg",
            location: {
                country: "USA",
                city: "Long beach",
            },
            status: "I am american!",
            isFollow: true,
        }, {
            id: 4,
            name: "Merch Exsaliburen",
            avatarUrl: "https://get.wallhere.com/photo/1920x1200-px-807359.jpg",
            location: {
                country: "Sweden",
                city: "Stockholm",
            },
            status: "I get sword!",
            isFollow: true,
        },
        ]);
    }
    let userList = props.users.map(user => <UserItem user={user} follow={props.follow} unfollow={props.unfollow} />);
    return (
        <div>
            {userList}
        </div>
    )
}

export default Users;