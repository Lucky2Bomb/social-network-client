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

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar); 

export default NavbarContainer;