import React from "react";
/* Router */
import {NavLink} from 'react-router-dom';
/* Components */
import ItemMiniCart from "./ItemMiniCart";

function MiniCart() {
    return (
        <div className="minicart-container">
            <div className="minicart-heading">
                5 products in cart
            </div>
            <ul className="minicart-items">
                <ItemMiniCart/>
                <ItemMiniCart/>
                <ItemMiniCart/>
                <ItemMiniCart/>
                <ItemMiniCart/>
                <ItemMiniCart/>
            </ul>
            <div className="minicart-btn">
                <NavLink to='/cart'>
                    <p>GO TO CART</p>
                </NavLink>
            </div>
            <div className="minicart-total">
                <span>Current total:</span>
                <span>80$</span>
            </div>
        </div>
    );
}

export default MiniCart;