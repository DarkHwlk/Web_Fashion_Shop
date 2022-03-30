import * as types from '../actions/ActionTypes'
/* get data from local storage */
// var data = JSON.parse(localStorage.getItem('FASHION_CART'));
// var initialState = data ? data : [];

var initialState = [
    {
        product: {
            id: 1,
            type: "tshirt",
            name: "Green tshirt",
            price: 12,
            sale: 8,
            status: false,  //con hang
            img: "./Pictures/man_products/green_tshirt_man.jpg",
        },
        quantity: 2,
    },
];

const cart = (state = initialState, action) => {
    switch(action.type){

        default: return [...state];
    }
}


export default cart;