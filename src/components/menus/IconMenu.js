import React, { useState } from 'react';
import {connect} from 'react-redux';
/* Router */
import {NavLink} from 'react-router-dom';

/* Components */
import MiniCart from "../minicart/MiniCart";
import MiniFavourite from '../favourite_items/MiniFavourite';

function IconMenu(props) {

    const {cart, favourite} = props;

    const [miniCart,setMiniCart] = useState(false);  //default is hide
    const [miniFavourite,setMiniFavourite] = useState(false);  //default is hide

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
    const showQuantityItemInFavourite = (favourite) => {
        let result = null;
        if(favourite.length>0){
            result = <span className="icon-menu-favourite-item">
                        {favourite.reduce((total, item) => {
                            return total + item.quantity;
                        },0)}
                    </span>;
        }
        return result;
    }
    const toggleMiniCart = () => {
        setMiniFavourite(false);
        setMiniCart(prev => !prev);
    }
    const toggleMiniFavourite = () => {
        setMiniCart(false);
        setMiniFavourite(prev => !prev);    
    }

    return (
        <div className='hide-small'>
            <input type="search"/>
            <input className="sb-sbm" type="submit" />
            {/* Menu Icon Heart */}
            <a 
                className="heart-icon-menu"
                onClick={() => toggleMiniFavourite()}
            >
                <i className="fa fa-heart icon-menu" aria-hidden="true"/>
                {showQuantityItemInFavourite(favourite)}
            </a>
            {/* Menu Icon Cart */}
            <a 
                className="cart-icon-menu"
                onClick={() => toggleMiniCart()}
            >
                <i className="fa fa-shopping-cart icon-menu" />
                {showQuantityItemInCart(cart)}
            </a>
            {/* Menu Icon Profile */}
            <NavLink to='/profile' className="profile-icon-menu">
                <i className="fa fa-user icon-header icon-menu" />
            </NavLink>
            {/* Mini favourite */}
            {miniFavourite ? <MiniFavourite onClose={() => setMiniFavourite(prev => !prev)}/> : null}
            {/* Mini cart */}
            {miniCart ? <MiniCart onClose={() => setMiniCart(prev => !prev)}/> : null}
        </div>
    );
}
/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
    return { 
        cart: state.cart,
        favourite: state.favourite,
    };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IconMenu);