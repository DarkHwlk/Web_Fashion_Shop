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
                key={index} type={product.type} img={product.img}
                id={product.id} name={product.name} status={product.status}
                price={product.price} sale={product.sale}
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