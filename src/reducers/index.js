import {combineReducers} from 'redux';

import products from './products';
import cart from './cart';
import notice from './notice';
import accounts from './accounts';

const myReducer = combineReducers({
    products,  //products of web
    cart,
    notice,
    accounts,
});

export default myReducer;