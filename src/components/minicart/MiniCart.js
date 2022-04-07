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
                key={index}
            />);
        })
        return result;
    }

    const totalCurrentPrice = (cart) => {
        let result = 0;
        if(cart.length>0){
            result = cart.reduce((total, item) => {
                if(item.product.sale>0)  //if sale > 0
                    return total+item.product.sale*item.quantity;
                else return total+item.product.price*item.quantity;
            },0);
        }
        return result;
    }

    const quantityProducts = (cart) => {
        let result = 0;
        if(cart.length>0){
            result = cart.reduce((total, item) => {
                return total+item.quantity;
            },0);
        }
        return result;
    }

    return (
        <div className="minicart-container">
            <div className="minicart-heading">
                {quantityProducts(cart)} products in cart
                <button onClick={() => onClose()}>
                    <i className="fa fa-close"/>
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
                <span>{totalCurrentPrice(cart)}$</span>
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