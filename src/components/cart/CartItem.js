import React, {Component} from "react";
import {connect} from 'react-redux';

import * as actions from '../../actions/index';

function CartItem(props) {

    const {product, quantity, onDeleteInCart, onUpdateQuantityInCart} = props;
    const {id, type, color, size, name, img, price, sale} = product;

    const calculateTotal = (price, quantity) => {
        let result = price*quantity;
        return result;
    }

    const clickDeleteInCart = (product) => {
        onDeleteInCart(product);
    }

    const clickUpdateQuantityInCart = (product, check) => {
        /* check = true -> + | check = false -> - */
        check ? onUpdateQuantityInCart(product, quantity+1) 
        : onUpdateQuantityInCart(product, quantity-1); 
        
    }

    return (
    <tr>
        <td className="col-item">
            <div className="cart-item-info">
                <div className="cart-item-photo">
                    <a href="#" className="cart-img-container">
                        <img src={img}/>
                    </a>
                </div>
                <div className="cart-item-detail">
                    <a href="#">{name}</a>
                    <p className="cart-item-type">{type}</p>
                    {/* Maybe have option like: size,color,... at here */}
                    <p className="cart-item-type">
                        Size: {typeof(size)==="string" ? size : "none"}
                    </p>
                    <p className="cart-item-type">Color: {color}</p>
                </div>
            </div>
        </td>
        {sale ? 
            <td className="col-price">
                <p className="cart-item-price">{sale}$</p>
                <p className="cart-item-old-price">{price}$</p>
            </td>
        :   <td className="col-price">
                <p className="cart-item-price">{price}$</p>
            </td>
        }
        <td className="col-quantity">
            <div className="cart-item-quantity">
                <button 
                    className="cart-btn-quantity"
                    onClick={() => clickUpdateQuantityInCart(product, false)}
                ><i className="fa fa-minus-square" /></button>
                <p>{quantity}</p>
                <button 
                    className="cart-btn-quantity"
                    onClick={() => clickUpdateQuantityInCart(product, true)}
                ><i className="fa fa-plus-square" /></button>
            </div>
        </td>
        <td className="col-total">
            <div>
                <button
                    onClick={() => clickDeleteInCart(product)}
                >
                    <i className="fa fa-close"/>
                </button>
            </div>
            <p className="cart-item-total">{calculateTotal(price, quantity)}$</p>
        </td>
    </tr>
    );
}

/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
    return { 
        
    };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteInCart: (product) => {
            dispatch(actions.actDeleteProductInCart(product));
        },
        onUpdateQuantityInCart: (product, quantity) => {
            dispatch(actions.actUpdateQuantityProductInCart(product, quantity));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);