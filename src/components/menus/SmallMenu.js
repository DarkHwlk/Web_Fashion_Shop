import React from "react";
/* Router */
import {NavLink, Link} from 'react-router-dom';

function SmallMenu() {
    return (
        <div id="small-menu">
            <i id='toggle-menu' className="fas fa-bars"></i>
            <NavLink 
                to="/" >
                <img src="./Pictures/logo-boo.png" alt="Boo"/>
            </NavLink>
            <NavLink 
                to="/profile" >
                <i className="fa fa-user icon-header" ></i>
            </NavLink>
        </div>
    );
}

export default SmallMenu;