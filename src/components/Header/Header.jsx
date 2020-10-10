import React from "react";
import "../../sass/style.scss";
import image from "./Header__background-image.jpg";

const Header = () => {
    return (
        <header className="header">
            <div className="header__background-image__wrapper">
                <img className="header__background-image" src={image} alt=""/>
            </div>
        </header>
    )
}

export default Header;