import React,{useState} from "react";
import {connect} from 'react-redux';

import * as actions from '../../actions/index';
import * as options_filter from './../../constants/options_filter';

/* Components */

function TableFilterProducts(props) {

    const showOptionFilter = (option) => {
        let result = null;
        let {items, type} = option;
        if(type === "PRICE"){
            if(items.lenght!==0){
                result = items.map((item, index) => {
                    return <p key={index}>{item.down}$ - {item.up}$</p>
                })
            }
        }else{
            if(items.lenght!==0){
                result = items.map((item, index) => {
                    return <p key={index}>{item}</p>
                })
            }
        }
        return result;
    }

    return (
        <table>
            <tr>
                <th>Price</th>
                <th>Type</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>
                    {/* <p>6$ - 10$ <i className="fa fa-check filter-check"/></p> */}
                    {showOptionFilter(options_filter.price)}
                </td>
                <td>
                    {showOptionFilter(options_filter.type)}
                </td>
                <td>
                    {showOptionFilter(options_filter.status)}
                </td>
            </tr>
        </table>
    );
}

/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
    return { 
        
    };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableFilterProducts);