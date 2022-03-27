import React from "react";

function ItemMiniCart() {
    return (
        <li className="minicart-item">
            <div className="minicart-item-photo">
                <a href="#">
                    <img src="./Pictures/ao_thun_1.jpg"/>
                </a>
            </div>
            <div className="minicart-item-detail">
                <a href="#">Black tshirt</a>
                <p className="cart-item-type">Tshirt</p>
                {/* Maybe have option like: size,color,... at here */}
            </div>
            <div className="minicart-remove">
                <button>
                    <i class="fa fa-close"/>
                </button>
            </div>
        </li>
    );
}

export default ItemMiniCart;