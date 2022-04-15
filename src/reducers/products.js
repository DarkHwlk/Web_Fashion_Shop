import * as types from '../actions/ActionTypes';
/* Call API get products */
var initialState = [
    {
        id: 1,
        type: "Tshirt",
        name: "Green tshirt",
        price: 12,
        sale: 8,
        status: false,  //con hang
        img: "./Pictures/man_products/green_tshirt_man.jpg",
    },
    {
        id: 2,
        type: "Tshirt",
        name: "Yellow tshirt",
        price: 10,
        sale: 0,
        status: true,  //con hang
        img: "./Pictures/man_products/yellow_tshirt_man.jpg",
    },
    {
        id: 3,
        type: "Shirt",
        name: "Navy shirt",
        price: 20,
        sale: 18,
        status: true,  //con hang
        img: "./Pictures/man_products/navy_shirt_man.jpg",
    },
    {
        id: 4,
        type: "Shirt",
        name: "Caro tshirt",
        price: 18,
        sale: 0,
        status: false,  //con hang
        img: "./Pictures/man_products/caro_shirt_man.jpg",
    },
    {
        id: 5,
        type: "Shirt",
        name: "Blue shirt",
        price: 18,
        sale: 15,
        status: true,  //con hang
        img: "./Pictures/man_products/blue_shirt_man.jpg",
    },
    {
        id: 6,
        type: "Jeans",
        name: "Blue jeans",
        price: 30,
        sale: 25,
        status: true,  //con hang
        img: "./Pictures/man_products/blue_jean_man.jpg",
    },
    {
        id: 7,
        type: "Jeans",
        name: "Silver jeans",
        price: 30,
        sale: 27,
        status: false,  //con hang
        img: "./Pictures/man_products/silver_jean_man.jpg",
    },
    {
        id: 8,
        type: "Shorts",
        name: "Blue shorts",
        price: 20,
        sale: 17,
        status: true,  //con hang
        img: "./Pictures/man_products/blue_short_man.jpg",
    },
];

const products = (state = initialState, action) => {
    let {sort} = action
    switch(action.type){

        default: return [...state];
    }
}

export default products;