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

// Show/Hide Notice
export const actChangeStatusNotice = (status) => {
    return{
        type: types.CHANGE_STATUS_NOTICE,
        status,
    }
}

// Change Notice
export const actChangeNotice = (content, typeNotice) => {
    return{
        type: types.CHANGE_NOTICE,
        content,
        typeNotice,
    }
}

// Login
export const actLogin = (account) => {
    return{
        type: types.LOGIN,
        account,
    }
}

// Register
export const actRegister = (account) => {
    return{
        type: types.REGISTER_NEW_ACCOUNT,
        account,
    }
}

// Clear loginSuccess
export const actClearLoginSuccess = () => {
    return{
        type: types.CLEAR_LOGIN_SUCCESS,
    }
}

// Clear existingAccount
export const actClearExistingAccount = () => {
    return{
        type: types.CLEAR_EXISTING_ACCOUNT,
    }
}