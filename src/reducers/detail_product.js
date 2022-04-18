import * as types from '../actions/ActionTypes';
/* Call API get products */
var initialState = {
    id: 1,
    type: "Tshirt",
    name: "Green tshirt",
    price: 12,
    sale: 8,
    status: false,  //con hang
    img: "./Pictures/man_products/green_tshirt_man.jpg",
    color: "green",
    size: ["S","M","L"],
    list_img: [
        "./Pictures/man_products/green_tshirt_man.jpg",
        "./Pictures/man_products/yellow_tshirt_man.jpg",
        "./Pictures/man_products/navy_shirt_man.jpg",
        "./Pictures/man_products/caro_shirt_man.jpg",
    ],
};

const detail_product = (state = initialState, action) => {
    let {sort} = action
    switch(action.type){

        default: return state;
    }
}

export default detail_product;