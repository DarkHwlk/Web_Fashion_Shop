import React, {useState, useRef} from "react";
import {connect} from 'react-redux';

import * as actions from '../../actions/index';

/* Components */
import ProductTitleBox from "./ProductTitleBox";
import ProductOptionBox from "./ProductOptionBox";
import ProductBtnBox from "./ProductBtnBox";

function ProductInfoBox(props) {

    const {product, onAddToCart} = props;
    const {id, type, name, price, sale, status, color, size} = product;

    const curProduct = useRef(product);

    const onCheckSize = (size) => {
        curProduct.current = {
            ...curProduct.current,
            size: size,
        }
        console.log(curProduct.current)
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
        />
    </div>
    );
}
/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
    return { 
        product: state.detail_product,
    };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actions.actAddToCart(product, 1));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductInfoBox);