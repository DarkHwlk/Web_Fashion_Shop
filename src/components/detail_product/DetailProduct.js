import React from "react";
import {connect} from 'react-redux';
/* Router */
import {useParams} from 'react-router-dom';

import * as actions from '../../actions/index';

/* Components */
import ProductImageBox from "./ProductImageBox";
import ProductInfoBox from "./ProductInfoBox";


function DetailProduct(props) {

    const {products} = props;
    const {productId} = useParams();
    const product = products.find((product, index) => {
        return product.id.toString() === productId;
    });
    const {img, list_img} = product;

    return (
    <div id="wrapper-content">
        <div id="product-info-main">
            <ProductImageBox img={img} list={list_img}/>
            <ProductInfoBox product={product}/>
        </div>
    </div>
    );
}
/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
    return { 
        products: state.products,
    };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);