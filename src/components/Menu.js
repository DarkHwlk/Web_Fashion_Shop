import React from "react";
/* Router */
import {NavLink, Link} from 'react-router-dom';

/* Components */
import SmallMenu from "./menus/SmallMenu";
import CategoryMenu from "./menus/CategoryMenu";
import IconMenu from "./menus/IconMenu";

function Menu() {

    return (
        <div id="header" className="sticky">
            {/* Small Menu */}
            <SmallMenu/>
            
            {/* Default Menu */}
            <nav className='container'>
                {/* Logo home */}
                <NavLink 
                    to="/" 
                    id="logo"
                    className='hide-small'>
                    <img src="./Pictures/logo-boo.png" alt="Boo"/>
                </NavLink>
                {/* Main menu */}
                <CategoryMenu/>
                {/* Icon menu */}
                <IconMenu/>
            </nav>
            
        </div>
    );
}

export default Menu;