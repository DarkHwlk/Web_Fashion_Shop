import * as types from '../actions/ActionTypes'
/* Call API get products */
var initialState = {
    accounts: [
        {
            name: "Hung",
            email: "hung@mail.com",
            password: "1912",
        },
        {
            name: "Bao",
            email: "bao@mail.com",
            password: "1406",
        },
    ],
    statusLogin: false,  //false = have not logged in | true = have logged in
    loginSuccess: "",  //"..." = login unsuccess becaus "..." | "SUCCESS" = login success
    existingAccount: false,  //false = register no existing account | true = register existing account
};

const accounts = (state = initialState, action) => {
    let {account, statusLogin} = action;

    switch(action.type){
        case types.LOGIN:
            if(checkAvailableAccounts(state.accounts, account)!==-1){
                state.statusLogin = true;  //login success
                state.loginSuccess = "SUCCESS";  //login success
            }else{
                state.loginSuccess = "email or password are wrong";  //login not success
            }
            return {...state};
        
        case types.REGISTER_NEW_ACCOUNT:
            let index = checkAvailableAccounts(state.accounts, account);
            if(index!==-1){
                // existing account
                state.existingAccount = true;
            }else{  // not existing account
                state.accounts.push(account);
            }
            console.log(state);
            return {...state};

        case types.CLEAR_LOGIN_SUCCESS:
            state.loginSuccess = "";
            return {...state};

        case types.CLEAR_EXISTING_ACCOUNT:
            state.existingAccount = false;
            return {...state};

        default: return {...state};
    }
}

// return -1 if there are not this account
var checkAvailableAccounts = (availableAccounts, account) => {
    let index = -1;
    if(availableAccounts.length>0){
        availableAccounts.forEach((availableAccount, i) => {
            if(availableAccount.email === account.email
                && availableAccount.password === account.password)index = i;
        });
    }
    return index;
}

export default accounts;