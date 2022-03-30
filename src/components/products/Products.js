import React from "react";
/* redux */
import {connect} from 'react-redux'

/* Components */
import Product from "./Product";

function Products(props) {

    const {products} = props;

    const showProduct = (products) => {
        let result = null;
        result = products.map((product, index) => {
            return (
            <Product
                product={product}
                key={index}
            />);
        })
        return result;
    }

    return (
        <ul className="products">
            {showProduct(products)}
        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);