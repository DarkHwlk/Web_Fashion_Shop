import React from "react";
import {connect} from 'react-redux';

import * as actions from '../../actions/index';

function Product(props) {

    const {product, onAddToCart, onChangeStatusNotice, 
        onChangeNotice} = props;
    const {id, type, name, img, status, price, sale} = product;

    const clickAddToCart = (product, status) => {
        if(status===true){  // available
            onAddToCart(product);
            onChangeNotice(`You have added ${name} to your cart.`,"SUCCESS");
            onChangeStatusNotice(true);
        }else{  // sold out
            onChangeNotice(`This product is sold out.`,"WARNING");
            onChangeStatusNotice(true);
        }
    }

    return (
        <li>
            <div className="product-item">
                <div className="product-top">
                    <a href="#" className="product-thumb">
                        <img className="product-image" src={img} alt="Tshirt 1"/>
                    </a>
                    {/* <!--Detail--> */}
                    <a href="./product" className="detail">Detail</a>
                </div>
                <div className="product-info-buy">
                    {/* <!--Info--> */}
                    <div className="product-info">
                        <a href="#" className="product-cat">{type}</a>
                        <a href="#" className="product-name">{name}</a>
                        {sale ? 
                            <div className="product-price">${sale} <span>${price}</span></div>
                        :   <div className="product-price">${price}</div>}
                        {status ? <span className="product-status-available">available</span> : <span className="product-status-soldout">sold out</span>}
                    </div>
                    {status ? 
                        <button 
                            className="buy-now"
                            onClick={() => clickAddToCart(product, true)}
                        >
                            BUY NOW 
                            <i className="fa fa-cart-plus"/>
                        </button>
                    :   <button 
                            className="cannot-buy"
                            onClick={() => clickAddToCart(product, false)}
                        >
                            BUY NOW 
                            <i className="fa fa-cart-plus"/>
                        </button>}
                </div>
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
        onAddToCart: (product) => {
            dispatch(actions.actAddToCart(product, 1));
        },
        onChangeStatusNotice: (status) => {
            dispatch(actions.actChangeStatusNotice(status));
        },
        onChangeNotice: (content, typeNotice) => {
            dispatch(actions.actChangeNotice(content, typeNotice));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);