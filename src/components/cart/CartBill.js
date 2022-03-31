import React from "react";
import {connect} from 'react-redux';

function CartBill(props) {

    const {cart} = props;

    const totalOldPrice = (cart) => {
        let result = 0;
        if(cart.length>0){
            result = cart.reduce((total, item) => {
                return total+item.product.price*item.quantity;
            },0);
        }
        return result;
    }

    const totalDiscount = (cart) => {
        let result = 0;
        if(cart.length>0){
            result = cart.reduce((total, item) => {
                return total+(item.product.price-item.product.sale)*item.quantity;
            },0);
        }
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

    return (
        <div className="cart-checkout">
            <div className="cart-content-title">
                <h2>Bill</h2>
            </div>
            <table className="cart-table-checkout">
                <tbody>
                <tr>
                    <th>Price:</th>
                    <td>{totalOldPrice(cart)}$</td>
                </tr>
                <tr>
                    <th className="cart-total-discount">Discount:</th>
                    <td className="cart-total-discount">{totalDiscount(cart)}$</td>
                </tr>
                <tr>
                    <th className="cart-total-final">Total:</th>
                    <td className="cart-total-final">{totalCurrentPrice(cart)}$</td>
                </tr>
                </tbody>
            </table>
            <button className="btn-checkout-order">ORDER</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartBill);