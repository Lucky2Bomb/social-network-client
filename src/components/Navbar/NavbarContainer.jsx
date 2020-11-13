import React from "react";
import "../../sass/style.scss";
import { connect } from "react-redux";
import Navbar from "./Navbar";

// const NavbarContainer = (props) => {
//     debugger;
//     const navbarItems = props.store.map(item => <NavbarItem path={item.path} name={item.name}/>);
//     return (
//         <nav className="navbar">
//             {navbarItems}
//         </nav>
//     )
// }

// export default NavbarContainer;

let mapStateToProps = (state) => {
    return {
        store: state.navbar
    }
}

const NavbarContainer = connect(mapStateToProps, {})(Navbar); 

export default NavbarContainer;