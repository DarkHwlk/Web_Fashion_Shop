import React from "react";

function Product(props) {

    const {id, type, name, img, status, price, sale} = props;

    return (
        <li>
            <div className="product-item">
                <div className="product-top">
                    <a href="#" className="product-thumb">
                        <img className="product-image" src={img} alt="Tshirt 1"/>
                    </a>
                    {/* <!--Detail--> */}
                    <a href="#" className="detail">Detail</a>
                </div>
                <div className="product-info-buy">
                    {/* <!--Info--> */}
                    <div className="product-info">
                        <a href="#" className="product-cat">{type}</a>
                        <a href="#" className="product-name">{name}</a>
                        <div className="product-price">${sale} <span>${price}</span></div>
                        {status ? <span className="product-status-available">available</span> : <span className="product-status-soldout">sold out</span>}
                    </div>
                    {status ? <button className="buy-now">BUY NOW <i className="fa fa-cart-plus"/></button>
                     : <button className="cannot-buy">BUY NOW <i className="fa fa-cart-plus"/></button>}
                </div>
            </div>
        </li>
    );
}

export default Product;