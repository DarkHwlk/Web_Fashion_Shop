import React, {useState, useRef} from "react";
import {connect} from 'react-redux';

import * as actions from '../../actions/index';

/* Components */
import ProductTitleBox from "./ProductTitleBox";
import ProductOptionBox from "./ProductOptionBox";
import ProductBtnBox from "./ProductBtnBox";

function ProductInfoBox(props) {

    const {product, onAddToCart, onToggleFavourite, favourite} = props;
    const {id, type, name, price, sale, status, color, size} = product;

    const curProduct = useRef(product);

    const onCheckSize = (size) => {
        curProduct.current = {
            ...curProduct.current,
            size: size,
        }
    }
    const findItem = (items, product) => {  // return -1 if there are not product in cart
        let index = -1;
        if(items.length>0){
            items.forEach((item, i) => {
                if(product.id === item.product.id) index = i;
            });
        }
        return index;
    }

    return (
    <div id="product-feature">
        <ProductTitleBox
            id={id} name={name} status={status}
            type={type} price={price} sale={sale}
        />
        <ProductOptionBox 
            color={color} size={size}
            onCheckSize={(size) => onCheckSize(size)}
        />
        <ProductBtnBox
            onAddToCart={()=>onAddToCart(curProduct.current)}
            onToggleFavourite={()=>onToggleFavourite(curProduct.current)}
            favourite={findItem(favourite, product)}
        />
    </div>
    );
}
/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
    return { 
        favourite: state.favourite,
    };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actions.actAddToCart(product, 1));
        },
        onToggleFavourite: (product) => {
            dispatch(actions.actToggleFavourite(product, 1));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductInfoBox);