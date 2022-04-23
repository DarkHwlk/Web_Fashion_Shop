import React,{memo} from "react";
import {connect} from 'react-redux';
/* Router */
import {NavLink} from 'react-router-dom';

import * as actions from '../../actions/index';

function Product(props) {

    const {pathURL, product, onAddToCart, onChangeStatusNotice, 
        onChangeNotice, onToggleFavourite, favourite} = props;
    const {id, type, name, img, status, price, sale} = product;

    const clickAddToCart = (product, status) => {
        if(status===true){  // available
            onAddToCart(product);
            onChangeNotice(`You have added ${name} to your cart.`,"SUCCESS");
            onChangeStatusNotice(true);
        }else{  // sold out
            onChangeNotice(`This product is sold out.`,"WARNING");
            onChangeStatusNotice(true);
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
        <li>
            <div className="product-item">
                <div className="product-top">
                    <div className="product-heart">
                        <i 
                            className={`fa fa-heart ${findItem(favourite, product)!==-1?"active":null}`} 
                            aria-hidden="true"
                            onClick={()=>onToggleFavourite(product)}
                        />
                    </div>
                    <a href="#" className="product-thumb">
                        <img className="product-image" src={img} alt="Tshirt 1"/>
                    </a>
                    {/* <!--Detail--> */}
                    <NavLink to={`${pathURL}/products/${id}`} 
                        className="detail">Detail</NavLink>
                </div>
                <div className="product-info-buy">
                    {/* <!--Info--> */}
                    <div className="product-info">
                        <a href="#" className="product-cat">{type}</a>
                        <a href="#" className="product-name">{name}</a>
                        {sale ? 
                            <div className="product-price">${sale} <span>${price}</span></div>
                        :   <div className="product-price">${price}</div>}
                        {status ? <span className="product-status-available">available</span> : <span className="product-status-soldout">sold out</span>}
                    </div>
                    {status ? 
                        <button 
                            className="buy-now"
                            onClick={() => clickAddToCart(product, true)}
                        >
                            ADD TO CART 
                            <i className="fa fa-cart-plus"/>
                        </button>
                    :   <button 
                            className="cannot-buy"
                            onClick={() => clickAddToCart(product, false)}
                        >
                            ADD TO CART 
                            <i className="fa fa-cart-plus"/>
                        </button>}
                </div>
            </div>
        </li>
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
        onChangeStatusNotice: (status) => {
            dispatch(actions.actChangeStatusNotice(status));
        },
        onChangeNotice: (content, typeNotice) => {
            dispatch(actions.actChangeNotice(content, typeNotice));
        },
        onToggleFavourite: (product) => {
            dispatch(actions.actToggleFavourite(product, 1));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Product));