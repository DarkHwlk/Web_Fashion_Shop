import React,{useState} from "react";
import {connect} from 'react-redux';

import * as actions from '../../actions/index';

/* Components */

function SortProducts(props) {

    const {onSortPrice} = props;

    const [showListType, setShowListType] = useState(false);

    const onSort = (type) =>{
        if(type==="LOW_TO_HIGH"){
            onSortPrice(true);
        }else if(type==="HIGH_TO_LOW"){
            onSortPrice(false);
        }else if(type==="NEWEST"){

        }
    }

    return (
        <div className="products-sort">
            <span className="products-sort-title">Sort by:</span>
            <span 
                className="products-sort-type"
                onClick={() => setShowListType(prev => !prev)}
            >
                Price - High to Low
                <i className="fa fa-angle-down"/>
            </span>
            <div 
                className="products-sort-list"
            >
                <p onClick={()=>onSort("NEWEST")}>
                    Newest</p>
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