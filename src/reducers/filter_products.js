import * as types from '../actions/ActionTypes';
/* Call API get products */
var initialState = {
    PRICE: null,
    TYPE: null,
    STATUS: null
}

const filter_products = (state = initialState, action) => {
    let {filter} = action;
    switch(action.type){
        case types.FILTER_PRODUCTS:
            console.log(filter);
            return filter;

        default: return state;
    }
}

export default filter_products;