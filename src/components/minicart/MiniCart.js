import React from "react";
import {v4} from 'uuid';
/* Router */
import {NavLink} from 'react-router-dom';
/* Components */
import ItemMiniCart from "./ItemMiniCart";

const cart = [
    {
        id: v4(),
        type: "tshirt",
        name: "Black tshirt",
        price: 10,
        sale: 5,
        status: true,  //con hang
        img: "./Pictures/ao_thun_1.jpg",
    },
    {
        id: v4(),
        type: "tshirt",
        name: "Black tshirt",
        price: 10,
        sale: 5,
        status: false,  //con hang
        img: "./Pictures/ao_thun_1.jpg",
    },
    {
        id: v4(),
        type: "tshirt",
        name: "Black tshirt",
        price: 10,
        sale: 5,
        status: true,  //con hang
        img: "./Pictures/ao_thun_1.jpg",
    },
    {
        id: v4(),
        type: "tshirt",
        name: "Black tshirt",
        price: 10,
        sale: 5,
        status: false,  //con hang
        img: "./Pictures/ao_thun_1.jpg",
    },
    {
        id: v4(),
        type: "tshirt",
        name: "Black tshirt",
        price: 10,
        sale: 5,
        status: false,  //con hang
        img: "./Pictures/ao_thun_1.jpg",
    },
    {
        id: v4(),
        type: "tshirt",
        name: "Black tshirt",
        price: 10,
        sale: 5,
        status: true,  //con hang
        img: "./Pictures/ao_thun_1.jpg",
    },
    {
        id: v4(),
        type: "tshirt",
        name: "Black tshirt",
        price: 10,
        sale: 5,
        status: false,  //con hang
        img: "./Pictures/ao_thun_1.jpg",
    },
    {
        id: v4(),
        type: "tshirt",
        name: "Black tshirt",
        price: 10,
        sale: 5,
        status: false,  //con hang
        img: "./Pictures/ao_thun_1.jpg",
    },
];

function MiniCart(props) {

    const {onClose} = props;

    const showItems = () => {
        let result = null;
        result = cart.map((product, index) => {
            return (
            <ItemMiniCart
                key={index} type={product.type} img={product.img}
                id={product.id} name={product.name}
                price={product.price} sale={product.sale}
            />);
        })
        return result;
    }

    return (
        <div className="minicart-container">
            <div className="minicart-heading">
                5 products in cart
                <button onClick={() => onClose()}>
                    <i class="fa fa-close"/>
                </button>
            </div>
            <ul className="minicart-items">
                {showItems()}
            </ul>
            <div className="minicart-btn">
                <NavLink to='/cart'>
                    <p>GO TO CART</p>
                </NavLink>
            </div>
            <div className="minicart-total">
                <span>Current total:</span>
                <span>80$</span>
            </div>
        </div>
    );
}

export default MiniCart;