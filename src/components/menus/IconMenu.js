import React, { useState } from 'react';
import {connect} from 'react-redux';
/* Router */
import {NavLink} from 'react-router-dom';

/* Components */
import MiniCart from "../minicart/MiniCart";

function IconMenu(props) {

    const {cart} = props;

    const [miniCart,setMiniCart] = useState(false);  //default is hide

    const showQuantityItemInCart = (cart) => {
        let result = null;
        if(cart.length>0){
            result = <span className="icon-menu-quantity-item">
                        {cart.reduce((total, item) => {
                            return total + item.quantity;
                        },0)}
                    </span>;
        }
        return result;
    }

    return (
        <div className='hide-small'>
            <input type="search"/>
            <input className="sb-sbm" type="submit" />
            {/* Menu Icon Cart */}
            <a 
                className="cart-icon-menu"
                onClick={() => setMiniCart(prev => !prev)}
            >
                <i className="fa fa-shopping-cart icon-menu" />
            </a>
            {/* Menu Icon Profile */}
            <NavLink to='/profile' className="profile-icon-menu">
                <i className="fa fa-user icon-header icon-menu" />
                {showQuantityItemInCart(cart)}
            </NavLink>
            {/* Mini cart */}
            {miniCart ? <MiniCart onClose={() => setMiniCart(prev => !prev)}/> : null}
        </div>
    );
}

/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
    return { 
        cart: state.cart,
    };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IconMenu);