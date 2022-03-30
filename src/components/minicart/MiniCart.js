import React from "react";
/* redux */
import {connect} from 'react-redux'
/* Router */
import {NavLink} from 'react-router-dom';
/* Components */
import ItemMiniCart from "./ItemMiniCart";

function MiniCart(props) {

    const {onClose, cart} = props;

    const showItems = () => {
        let result = null;
        result = cart.map((productInCart, index) => {
            let {product, quantity} = productInCart;
            return (
            <ItemMiniCart
                product={product}
                quantity={quantity}
            />);
        })
        return result;
    }

    return (
        <div className="minicart-container">
            <div className="minicart-heading">
                5 products in cart
                <button onClick={() => onClose()}>
                    <i class="fa fa-close"/>
                </button>
            </div>
            <ul className="minicart-items">
                {showItems()}
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

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);