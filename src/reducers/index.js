import {combineReducers} from 'redux';

import products from './products';
import cart from './cart';

const myReducer = combineReducers({
    products,  //products of web
    cart,
});

export default myReducer;