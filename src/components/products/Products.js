import React from "react";
import {v4} from 'uuid';

/* Components */
import Product from "./Product";

const products = [
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

function Products() {

    const showProduct = () => {
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
            {showProduct()}
        </ul>
    );
}

export default Products;