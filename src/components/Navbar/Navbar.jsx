import React from "react";
import "../../sass/style.scss";
import NavbarItem from "./NavBarItem/NavbarItem";

const Navbar = (props) => {
    const navbarItems = props.store.map(item => <NavbarItem path={item.path} name={item.name}/>);
    return (
        <nav className="navbar">
            {navbarItems}
        </nav>
    )
}

export default Navbar;