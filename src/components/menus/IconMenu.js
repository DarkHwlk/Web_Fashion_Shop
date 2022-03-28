import React, { useState } from 'react';
/* Router */
import {NavLink} from 'react-router-dom';

/* Components */
import MiniCart from "../minicart/MiniCart";

function IconMenu() {

    const [miniCart,setMiniCart] = useState(false);  //default is hide

    return (
        <div className='hide-small'>
            <input type="search"/>
            <input className="sb-sbm" type="submit" />
            {/* Menu Icon Cart */}
            <a onClick={() => setMiniCart(prev => !prev)}>
                <i className="fa fa-shopping-cart icon-menu" />
            </a>
            {/* Menu Icon Profile */}
            <NavLink to='/profile'>
                <i className="fa fa-user icon-header icon-menu" />
            </NavLink>
            {/* Mini cart */}
            {miniCart ? <MiniCart onClose={() => setMiniCart(prev => !prev)}/> : null}
        </div>
    );
}

export default IconMenu;