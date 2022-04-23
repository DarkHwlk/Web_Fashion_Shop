import React,{useRef} from "react";
/* redux */
import {connect} from 'react-redux'

/* Components */
import Product from "./Product";

function Products(props) {

    const {pathURL, products, sort, filter} = props;

    let curProducts = useRef(products);  // Current products have been arranged

    const sortPrice = (curProducts, sort) => {
        let result = curProducts;
        result = curProducts.sort((product1,product2) => {
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
    };

    const filterProducts = (allProducts, filter) => {
        let result = allProducts;
        const {PRICE, TYPE, STATUS} = filter;
        if(PRICE!==null){
            result = result.filter((product, index) => {
                return (product.price>=PRICE.down)&&(product.price<=PRICE.up);
            }); 
        }
        if(TYPE!==null){
            result = result.filter((product, index) => {
                return product.type.toLowerCase()===TYPE.toLowerCase();
            });  
        }
        if(STATUS==="Available"){
            result = result.filter((product, index) => {
                return product.status===true;
            });  
        }else if(STATUS==="Sold out"){
            result = result.filter((product, index) => {
                return product.status===false;
            });
        }
        return result;
    };

    const showProduct = (allProducts, sort, filter) => {
        let result = null;
        /* Filter */
        curProducts.current = filterProducts(allProducts,filter);
        /* Sort */
        if(sort==="LOW_TO_HIGH"){
            curProducts.current = sortPrice(curProducts.current, true);
        }else if(sort==="HIGH_TO_LOW"){
            curProducts.current = sortPrice(curProducts.current, false);
        }
        result = curProducts.current.map((product, index) => {
            return (
            <Product
                product={product}
                key={index}
                pathURL={pathURL}
            />);
        })
        return result;
    };

    return (
        <ul className="products">
            {showProduct(products, sort, filter)}
        </ul>
    );
}

/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
    return { 
        products: state.products,
        sort: state.sort_products, 
        filter: state.filter_products,
    };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);