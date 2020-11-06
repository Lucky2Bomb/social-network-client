import React from "react";
import "../../../sass/style.scss";

const UserItem = (props) => {
    
    return (
        <div className="user-item-contaner" key={props.user.id}>
            <div className="user-item-contaner__img-wrapper">
                <img src={props.user.avatarUrl} alt="" className="user-item-contaner__img" />
            </div>

            <div className="user-item-contaner__name-wrapper">
                {props.user.name}
            </div>

            <div className="user-item-contaner__status-wrapper">
                {props.user.status}
            </div>

            <div className="user-item-contaner__location-wrapper">
                {props.user.location.country}, {props.user.location.city}
            </div>

            <div className="user-item-contaner__follow-wrapper">
                {props.user.isFollow ?
                    <button
                        className="button-default"
                        onClick={() => {
                            props.unfollow(props.user.id);
                        }}
                    >Unfollow</button> :

                    <button
                        className="button-default"
                        onClick={() => {
                            props.follow(props.user.id);
                        }}
                    >Follow</button>}
            </div>
        </div>
    )
}

export default UserItem;