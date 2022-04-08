import {combineReducers} from 'redux';

import products from './products';
import cart from './cart';
import notice from './notice';
import accounts from './accounts';
import sort_products from './sort_products';

const myReducer = combineReducers({
    products,  //products of web
    cart,
    notice,
    accounts,
    sort_products,
});

export default myReducer;