import * as types from '../actions/ActionTypes'
import * as MESSAGE from '../constants/notice'

var initialState = {
    content: "", 
    status: false,
    type: "SUCCESS",
};  //default: hide notice

const notice = (state = initialState, action) => {
    let {content, status, typeNotice} = action;
    switch(action.type){
        case types.CHANGE_STATUS_NOTICE:
            state.status = status;
            return {...state};
        
        case types.CHANGE_NOTICE:
            state.content = content;
            state.typeNotice = typeNotice;
            return {...state};

        default: return {...state};
    }
}

export default notice;