import {v4} from 'uuid';

/* Call API get products */
var initialState = [
    {
        id: v4(),
        type: "tshirt",
        name: "Green tshirt",
        price: 12,
        sale: 8,
        status: false,  //con hang
        img: "./Pictures/man_products/green_tshirt_man.jpg",
    },
    {
        id: v4(),
        type: "tshirt",
        name: "Yellow tshirt",
        price: 10,
        sale: 0,
        status: true,  //con hang
        img: "./Pictures/man_products/yellow_tshirt_man.jpg",
    },
    {
        id: v4(),
        type: "shirt",
        name: "Navy shirt",
        price: 20,
        sale: 18,
        status: true,  //con hang
        img: "./Pictures/man_products/navy_shirt_man.jpg",
    },
    {
        id: v4(),
        type: "shirt",
        name: "Caro tshirt",
        price: 18,
        sale: 0,
        status: false,  //con hang
        img: "./Pictures/man_products/caro_shirt_man.jpg",
    },
    {
        id: v4(),
        type: "shirt",
        name: "Blue shirt",
        price: 18,
        sale: 15,
        status: true,  //con hang
        img: "./Pictures/man_products/blue_shirt_man.jpg",
    },
    {
        id: v4(),
        type: "jeans",
        name: "Blue jeans",
        price: 30,
        sale: 25,
        status: true,  //con hang
        img: "./Pictures/man_products/blue_jean_man.jpg",
    },
    {
        id: v4(),
        type: "jeans",
        name: "Silver jeans",
        price: 30,
        sale: 27,
        status: false,  //con hang
        img: "./Pictures/man_products/silver_jean_man.jpg",
    },
    {
        id: v4(),
        type: "shorts",
        name: "Blue shorts",
        price: 20,
        sale: 17,
        status: true,  //con hang
        img: "./Pictures/man_products/blue_short_man.jpg",
    },
];

const products = (state = initialState, action) => {
    switch(action.type){

        default: return [...state];
    }
}

export default products;