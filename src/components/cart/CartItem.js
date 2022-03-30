import React, {Component} from "react";
import {connect} from 'react-redux';

function CartItem(props) {

    const {id, type, name, img, price, sale} = props.product;
    const quantity = props.quantity;

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
                </div>
            </div>
        </td>
        <td className="col-price">
            <p className="cart-item-price">{sale}$</p>
            <p className="cart-item-old-price">{price}$</p>
        </td>
        <td className="col-quantity">
            <div className="cart-item-quantity">
                <button className="cart-btn-quantity"><i class="fa fa-minus-square" /></button>
                <p>{quantity}</p>
                <button className="cart-btn-quantity"><i class="fa fa-plus-square" /></button>
            </div>
        </td>
        <td className="col-total">
            <p className="cart-item-total">{price}$</p>
        </td>
        <td className="col-check">
            <input type="checkbox"/>
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
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);