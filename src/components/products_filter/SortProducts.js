import React,{useState} from "react";
import {connect} from 'react-redux';

import * as actions from '../../actions/index';

/* Components */

function SortProducts(props) {

    const {onSortPrice} = props;

    const [typeSort, setTypeSort] = useState("Price - Low to High");

    const onSort = (type) =>{
        if(type==="LOW_TO_HIGH"){
            onSortPrice(true);
            setTypeSort("Price - Low to High");
        }else if(type==="HIGH_TO_LOW"){
            onSortPrice(false);
            setTypeSort("Price - High to Low");
        }
    }

    return (
        <div className="products-sort">
            <span className="products-sort-title">Sort by:</span>
            <span 
                className="products-sort-type"
            >
                {typeSort}
                {typeSort === "Price - Low to High" 
                ? <i className="fa fa-sort-amount-desc"/> 
                : <i className="fa fa-sort-amount-asc"/>}
            </span>
            <div 
                className="products-sort-list"
            >
                <p onClick={()=>onSort("LOW_TO_HIGH")}>
                    Price - Low to High</p>
                <p onClick={()=>onSort("HIGH_TO_LOW")}>
                    Price - High to Low</p>
            </div>
        </div>
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
        onSortPrice: (sort) => {
            dispatch(actions.actSortPriceProducts(sort));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortProducts);