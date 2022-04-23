import React, {Component} from "react";
import {connect} from 'react-redux';

import * as actions from '../../actions/index';

function ItemMiniFavourite(props) {

    const {product, quantity, onDeleteInFavourite} = props;
    const {id, type, name, img, price, sale} = product;

    const clickDeleteInFavourite = (product) => {
        onDeleteInFavourite(product);
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
            </div>
            </div>
            <div className="minicart-remove">
                <button
                    onClick={() => clickDeleteInFavourite(product)}
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
        onDeleteInFavourite: (product) => {
            dispatch(actions.actDeleteProductInFavourite(product));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemMiniFavourite);