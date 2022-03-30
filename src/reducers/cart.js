import * as types from '../actions/ActionTypes'
import * as MESSAGE from '../constants/message'
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
    let {product, quantity} = action;
    let index = -1;

    switch(action.type){
        case types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if(index !== -1){  // exist product in cart
                state[index].quantity = state[index].quantity + 1;
            }else{  
                state.push({
                    product: product,
                    quantity: quantity
                });
            }
            pushMessageToClient(MESSAGE.MSG_ADD_TO_CART_SUCCESS);

            //localStorage.setItem("FASHION_CART", JSON.stringify(state));
            return [...state];

        default: return [...state];
    }
}

// return -1 if there are not product in cart
var findProductInCart = (cart, product) => {
    let index = -1;
    if(cart.length>0){
        cart.forEach((productInCart, i) => {
            if(product.id === productInCart.product.id) index = i;
        });
    }
    return index;
}

var pushMessageToClient = (message) => {
    console.log(message);
}

export default cart;