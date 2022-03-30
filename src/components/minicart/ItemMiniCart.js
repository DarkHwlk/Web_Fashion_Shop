import React from "react";

function ItemMiniCart(props) {

    const {id, type, name, img, price, sale} = props.product;
    const quantity = props.quantity;

    return (
        <li className="minicart-item">
            <div className="minicart-item-info">
            <div className="minicart-item-photo">
                <a href="#">
                    <img src={img}/>
                </a>
            </div>
            <div className="minicart-item-detail">
                <a href="#">{name}</a>
                <p className="cart-item-type">{type}</p>
                <span>{price}$</span>
                {/* Maybe have option like: size,color,... at here */}
                <p>Quantity: {quantity}</p>
            </div>
            </div>
            <div className="minicart-remove">
                <button>
                    <i className="fa fa-close"/>
                </button>
            </div>
        </li>
    );
}

export default ItemMiniCart;