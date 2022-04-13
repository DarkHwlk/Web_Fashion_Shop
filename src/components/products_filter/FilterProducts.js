import React,{useState} from "react";
import {connect} from 'react-redux';

import * as actions from '../../actions/index';

/* Components */
import TableFilterProducts from "./TableFilterProducts";

function FilterProducts(props) {

    return (
        <div className="products-filter">
            <span className="products-filter-title">
                Filter <i className="fa fa-sliders"/>
            </span>
            <div 
                className="products-filter-options"
            >
                <div className="products-filter-options-title">

                </div>
                <TableFilterProducts/>
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
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterProducts);