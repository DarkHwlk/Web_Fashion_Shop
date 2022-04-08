import * as types from '../actions/ActionTypes';
/* Call API get products */
var initialState = ""

const sort_products = (state = initialState, action) => {
    let {sort} = action
    switch(action.type){
        case types.SORT_PRICE_PRODUCTS:
            if(sort){
                state = "LOW_TO_HIGH";
            }else{
                state = "HIGH_TO_LOW";
            }
            console.log(state)
            return state;

        default: return state;
    }
}

export default sort_products;