import React,{useState} from "react";
import {connect} from 'react-redux';

import * as actions from '../../actions/index';
import * as options_filter from './../../constants/options_filter';

/* Components */

function TableFilterProducts(props) {

    const {onFilter, filter} = props;

    const showOptionFilter = (option) => {
        let result = null;
        let {items, type} = option;
        if(type === "PRICE"){
            if(items.lenght!==0){
                result = items.map((item, index) => {
                    if(filter[type]===item) 
                        return <p key={index} 
                        onClick={()=>clickCheckOption(-1, type, filter)}>
                            {item.down}$ - {item.up}$
                            <i className="fa fa-check filter-check"/>
                        </p>
                    return <p key={index} 
                    onClick={()=>clickCheckOption(index, type, filter)}>{item.down}$ - {item.up}$</p>
                })
            }
        }else{
            if(items.lenght!==0){
                result = items.map((item, index) => {
                    if(filter[type]===item) 
                        return <p key={index} 
                        onClick={()=>clickCheckOption(-1, type, filter)}>
                            {item}
                            <i className="fa fa-check filter-check"/>
                        </p>
                    return <p key={index} 
                    onClick={()=>clickCheckOption(index, type, filter)}>{item}</p>
                })
            }
        }
        return result;
    }

    const clickCheckOption = (index, type, old_filter) => {
        const options = options_filter;
        if(index===-1){  // Cancel check
            onFilter({
                ...old_filter,
                [type]: null
            });
        }else{
            onFilter({
                ...old_filter,
                [type]: options[type].items[index]
            });
        }

    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Price</th>
                    <th>Type</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {showOptionFilter(options_filter.PRICE)}
                    </td>
                    <td>
                        {showOptionFilter(options_filter.TYPE)}
                    </td>
                    <td>
                        {showOptionFilter(options_filter.STATUS)}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
    return { 
        filter: state.filter_products,
    };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilter: (filter) => {
            dispatch(actions.actFilterProducts(filter));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableFilterProducts);