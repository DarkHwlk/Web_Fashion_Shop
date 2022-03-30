import React, {Component} from "react";
import {connect} from 'react-redux';
/* Components */
import CartItem from './cart/CartItem.js';
import CartBill from './cart/CartBill.js'

function Cart(props) {

    const {cart} = props;

    const showItems = () => {
        let result = null;
        result = cart.map((productInCart, index) => {
            let {product, quantity} = productInCart;
            return (
            <CartItem
                product={product}
                quantity={quantity}
                key={index}
            />);
        })
        return result;
    }


    return (
        <div id="wrapper-content">
            {/* Tittle */}
            <div class="headline">
                <h3>CART</h3>
            </div>  
            {/* Cart container */}
            <div className="cart-container">
                <div className="cart-content">
                    <div className="cart-content-title">
                        <h2>5 products</h2>
                    </div>
                    <table className="cart-table-items">
                        <thead>
                            <tr>
                                <th className="col-item">PRODUCT</th>
                                <th className="col-price">PRICE</th>
                                <th className="col-quantity">QUANTITY</th>
                                <th className="col-total">TOTAL</th>
                                <th className="col-check">
                                    <input type="checkbox"/>
                                </th>
                            </tr>
                        </thead>
                        {/* List items */}
                        <tbody>
                            {showItems()}
                        </tbody>
                    </table>
                </div>
                {/* Bill */}
                <CartBill/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);