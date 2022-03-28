import {combineReducers} from 'redux';

import products from './products';

const myReducer = combineReducers({
    products,  //products of web
});

export default myReducer;