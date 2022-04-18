import {combineReducers} from 'redux';

import products from './products';
import cart from './cart';
import notice from './notice';
import accounts from './accounts';
import sort_products from './sort_products';
import filter_products from './filter_products';
import detail_product from './detail_product';

const myReducer = combineReducers({
    products,  //products of web
    cart,
    notice,
    accounts,
    sort_products,
    filter_products,
    detail_product,
});

export default myReducer;