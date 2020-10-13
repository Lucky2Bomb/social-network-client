import React from "react";
import "./DialogListItem.scss";
import { NavLink } from "react-router-dom";

const DialogListItem = (props) => {
    return (
        <div className="dialog-list-item">
            <NavLink to={props.to}>{props.author}</NavLink>
        </div>
    )
}

export default DialogListItem;