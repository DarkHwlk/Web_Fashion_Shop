import React from "react";
/* Router */
import {NavLink} from 'react-router-dom';

function IconMenu() {
    return (
        <div className='hide-small'>
            <input type="search"/>
            <input className="sb-sbm" type="submit" />

            <NavLink to='/cart'>
                <i className="fa fa-shopping-cart icon-menu" />
            </NavLink>

            <NavLink to='/profile'>
                <i className="fa fa-user icon-header icon-menu" />
            </NavLink>
        </div>
    );
}

export default IconMenu;