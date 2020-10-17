import React from "react";
import "./DialogListItem.scss";
import { NavLink } from "react-router-dom";

const DialogListItem = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <div className="dialog-list-item">
            <NavLink to={path}>
                <div className="dialog-item-contaner">
                    <div className="dialog-item-contaner__img-wrapper">
                        <img className="dialog-item-contaner__img" src={props.avatar} alt="" />
                    </div>

                    <div className="dialog-item-contaner__author-wrapper">
                        {props.author}
                    </div>

                    <div className="dialog-item-contaner__message-wrapper">
                        {props.message}
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default DialogListItem;