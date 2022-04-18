import React, {useState} from "react";
import {connect} from 'react-redux';

import * as actions from '../../actions/index';

/* Components */
import ProductTitleBox from "./ProductTitleBox";
import ProductOptionBox from "./ProductOptionBox";
import ProductBtnBox from "./ProductBtnBox";

function ProductInfoBox(props) {

    const {product} = props;
    const {id, type, name, price, sale, status, color, size} = product;

    const showPercentDiscount = (price, sale) => {
        let result = null;
        if(sale){
            let percent = (price-sale)/price*100;
            result = <div className="label-sale">
                Discount {percent.toFixed(2)}%
            </div>
        }
        return result;
    }

    return (
    <div id="product-feature">
        <ProductTitleBox
            id={id} name={name} status={status}
            type={type} price={price} sale={sale}
        />
        <ProductOptionBox color={color} size={size}/>
        <ProductBtnBox/>
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
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductInfoBox);