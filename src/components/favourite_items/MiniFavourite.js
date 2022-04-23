import React from "react";
/* redux */
import {connect} from 'react-redux'
/* Router */
import {NavLink} from 'react-router-dom';
/* Components */
import ItemMiniFavourite from "./ItemMiniFavourite";

function MiniFavourite(props) {

    const {onClose, favourite} = props;

    const showItems = () => {
        let result = null;
        result = favourite.map((productInCart, index) => {
            let {product, quantity} = productInCart;
            return (
            <ItemMiniFavourite
                product={product}
                quantity={quantity}
                key={index}
            />);
        })
        return result;
    }

    const totalCurrentPrice = (favourite) => {
        let result = 0;
        if(favourite.length>0){
            result = favourite.reduce((total, item) => {
                if(item.product.sale>0)  //if sale > 0
                    return total+item.product.sale*item.quantity;
                else return total+item.product.price*item.quantity;
            },0);
        }
        return result;
    }

    const quantityProducts = (favourite) => {
        let result = 0;
        if(favourite.length>0){
            result = favourite.reduce((total, item) => {
                return total+item.quantity;
            },0);
        }
        return result;
    }

    return (
        <div className="minicart-container">
            <div className="minifavourite-heading">
                {quantityProducts(favourite)} products in favourite
                <button onClick={() => onClose()}>
                    <i className="fa fa-close"/>
                </button>
            </div>
            <ul className="minicart-items">
                {showItems()}
            </ul>
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
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniFavourite);