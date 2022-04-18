import React from "react";
import {connect} from 'react-redux';

import * as actions from '../../actions/index';

/* Components */
import ProductImageBox from "./ProductImageBox";
import ProductInfoBox from "./ProductInfoBox";


function DetailProduct(props) {

    const {product} = props;
    const {img, list_img} = product;

    return (
    <div id="wrapper-content">
        <div id="product-info-main">
            <ProductImageBox img={img} list={list_img}/>
            <ProductInfoBox/>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);