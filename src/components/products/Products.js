import React from "react";
/* redux */
import {connect} from 'react-redux'

/* Components */
import Product from "./Product";

function Products(props) {

    const {products, sort} = props;

    const sortPrice = (products, sort) => {
        let result;
        result = products.sort((product1,product2) => {
            const price1 = product1.sale?product1.sale:product1.price;
            const price2 = product2.sale?product2.sale:product2.price;
            if(sort){  //LowToHigh
                if(price1>price2) return 1;
                else if(price1<price2) return -1;
                return 0;
            }else{  //HighToLow
                if(price1>price2) return -1;
                else if(price1<price2) return 1;
                return 0;
            }
        });   
        return result;
    }

    const showProduct = (products, sort) => {
        let result = null;
        if(sort==="LOW_TO_HIGH"){
            products = sortPrice(products, true);
            console.log(1);
        }else if(sort==="HIGH_TO_LOW"){
            products = sortPrice(products, false);
            console.log(0);
        }
        console.log(products);
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
            {showProduct(products, sort)}
        </ul>
    );
}

/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
    return { 
        products: state.products,
        sort: state.sort_products, 
    };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);