import React,{useState} from "react";
import {connect} from 'react-redux';

import * as actions from '../../actions/index';

/* Components */

function OptionFilterProducts(props) {
    return (
        <p>6$ - 10$ <i className="fa fa-check filter-check"/></p>            
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

export default connect(mapStateToProps, mapDispatchToProps)(OptionFilterProducts);