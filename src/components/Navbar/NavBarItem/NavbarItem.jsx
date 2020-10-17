import React from "react";
import "../../../sass/style.scss";
import { NavLink } from "react-router-dom";

const NavbarItem = (props) => {
    return (
            <div className="navbar-item">
                <NavLink to={props.path}>{props.name}</NavLink>
            </div>
    )
}

export default NavbarItem;