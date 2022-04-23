import * as types from '../actions/ActionTypes'
/* get data from local storage */
var data = JSON.parse(localStorage.getItem('FASHION_FAVOURITE'));
var initialState = data ? data : [];

const favourite = (state = initialState, action) => {
    let {product, quantity} = action;
    let index = -1;

    switch(action.type){
        case types.TOGGLE_FAVOURITE:
            index = findProductInCart(state, product);
            if(index !== -1){  // exist product in cart
                state.splice(index,1);
            }else{  
                state.push({
                    product: product,
                    quantity: quantity
                });
            }

            localStorage.setItem("FASHION_FAVOURITE", JSON.stringify(state));
            return [...state];

        case types.DELETE_PRODUCT_IN_FAVOURITE:
            index = findProductInCart(state, product);
            if(index !== -1){  // exist product in cart
                state.splice(index,1);  //delete this item
            }

            localStorage.setItem("FASHION_FAVOURITE", JSON.stringify(state));
            return [...state];

        case types.UPDATE_QUANTITY_PRODUCT_IN_FAVOURITE:
            index = findProductInCart(state, product);
            if(index !== -1){  // exist product in cart
                state[index].product = product;
                state[index].quantity = quantity;
            }

            localStorage.setItem("FASHION_FAVOURITE", JSON.stringify(state));
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

export default favourite;