import * as types from './ActionTypes'

// Add products
export const actAddToCart = (product, quantity) => {
    return{
        type: types.ADD_TO_CART,
        product,  // product: product
        quantity,  // quantity: quantity
    }
}

export const actChangeMessage = (message) => {
    return{
        type: types.CHANGE_MESSAGE,
        message,
    }
}

// Delete product
export const actDeleteProductInCart = (product) => {
    return{
        type: types.DELETE_PRODUCT_IN_CART,
        product,
    }
}

// Update quantity, option
export const actUpdateQuantityProductInCart = (product, quantity) => {
    return{
        type: types.UPDATE_QUANTITY_PRODUCT_IN_CART,
        product,
        quantity,
    }
}