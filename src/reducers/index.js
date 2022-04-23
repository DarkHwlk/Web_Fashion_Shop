import {combineReducers} from 'redux';

import products from './products';
import cart from './cart';
import notice from './notice';
import accounts from './accounts';
import sort_products from './sort_products';
import filter_products from './filter_products';
import favourite from './favourite';

const myReducer = combineReducers({
    products,  //products of web
    cart,
    notice,
    accounts,
    sort_products,
    filter_products,
    favourite,
});

export default myReducer;