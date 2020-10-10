import React from "react";
import "../../sass/style.scss";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <div className="navbar__item">
                <NavLink to="/profile">Profile</NavLink>
                
            </div>
            
            <div className="navbar__item">
                <NavLink to="/dialogs">Dialogs</NavLink>
            </div>
            
            <div className="navbar__item">
                <NavLink to="/news">News</NavLink>
            </div>
            
            <div className="navbar__item">
                <NavLink to="/music">Music</NavLink>
            </div>
            
            <div className="navbar__item">
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;