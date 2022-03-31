import React, {Component} from "react";
import {connect} from 'react-redux';

import * as actions from '../../actions/index';

function ItemMiniCart(props) {

    const {product, quantity, onDeleteInCart} = props;
    const {id, type, name, img, price, sale} = product;

    const clickDeleteInCart = (product) => {
        onDeleteInCart(product);
    }

    return (
        <li className="minicart-item">
            <div className="minicart-item-info">
            <div className="minicart-item-photo">
                <a href="#">
                    <img src={img}/>
                </a>
            </div>
            <div className="minicart-item-detail">
                <a href="#">{name}</a>
                <p className="minicart-item-type">{type}</p>
                {sale ? 
                    <div >
                        <span className="minicart-item-price">{sale}$</span>
                        <span className="minicart-item-oldprice">{price}$</span>
                    </div>
                :   <div >
                        <span className="minicart-item-price">{price}$</span>
                    </div>
                }
                {/* Maybe have option like: size,color,... at here */}
                <p>Quantity: {quantity}</p>
            </div>
            </div>
            <div className="minicart-remove">
                <button
                    onClick={() => clickDeleteInCart(product)}
                >
                    <i className="fa fa-close"/>
                </button>
            </div>
        </li>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemMiniCart);