import React from "react";
import {connect} from 'react-redux';
/* Components */
import CartItem from './CartItem.js';
import CartBill from './CartBill.js'

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

    const quantityAllItemInCart = (cart) => {
        let result = 0;
        if(cart.length>0){
            result = cart.reduce((total, item) => {
                return total + item.quantity;
            },0);
        }
        return result;
    }


    return (
        <div id="wrapper-content">
            {/* Tittle */}
            <div className="headline">
                <h3>CART</h3>
            </div>  
            {/* Cart container */}
            <div className="cart-container">
                <div className="cart-content">
                    <div className="cart-content-title">
                        <h2>{quantityAllItemInCart(cart)} products</h2>
                    </div>
                    <table className="cart-table-items">
                        <thead>
                            <tr>
                                <th className="col-item">PRODUCT</th>
                                <th className="col-price">PRICE</th>
                                <th className="col-quantity">QUANTITY</th>
                                <th className="col-total">TOTAL</th>
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