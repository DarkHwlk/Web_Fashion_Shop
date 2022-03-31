import React, {useEffect} from "react";
import {connect} from 'react-redux';

import * as actions from '../actions/index';
/* Components */

function Notice(props) {
    
    const {notice, onChangeStatusNotice} = props;
    const {content, status, typeNotice} = notice;

    useEffect(() => {
        const hideNotice = () => {
            onChangeStatusNotice(false);
        } 
        if(status){
            // Hide Notice after showing about 3s 
            const timeout =  setTimeout(hideNotice,4000);
            return () => {
                // clearTimeout prevent leak memory
                clearTimeout(timeout);
            }
        }
    },[status]);

    const cssTypeNotice = (typeNotice) => {
        if(typeNotice==="SUCCESS") return "alert-success";
        else if(typeNotice==="DANGER") return "alert-danger";
        else if(typeNotice==="WARNING") return "alert-warning";
    }

    if(status){
        return (
            <div className="container-alert">
                <div className={cssTypeNotice(typeNotice)}>
                    <span 
                        className="closebtn" 
                        onClick={() => onChangeStatusNotice(false)}
                    >
                        &times;
                    </span> 
                    <strong>
                        {typeNotice}!
                    </strong> {content}
                </div>
            </div>
        );
    }else{
        return null;
    }
}

/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
    return { 
        notice: state.notice,
    };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeStatusNotice: (status) => {
            dispatch(actions.actChangeStatusNotice(status));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notice);