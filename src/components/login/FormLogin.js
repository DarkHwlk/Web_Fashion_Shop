import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';

import * as actions from '../../actions/index';

function FormLogin(props) {

    const {accounts, onRegister, onLogin, onClearLoginSuccess,
        onChangeStatusNotice, onChangeNotice} = props;

    const {loginSuccess} = accounts;

    const [showPassword, setShowPassword] = useState(false);  //default hide password

    useEffect(() => {
        if(loginSuccess==="SUCCESS"){
            onChangeNotice(`Login is successful.`,"SUCCESS");
            onChangeStatusNotice(true);
            onClearLoginSuccess();
        }else if(loginSuccess!==""){
            onChangeNotice(`Login is unsuccessful because ${loginSuccess}.`,"WARNING");
            onChangeStatusNotice(true);
            onClearLoginSuccess();
        }
    },[loginSuccess]);

    const buttonShowPassword = (statusPassword) => {
        if(statusPassword){
            return <i 
                    className="far fa-eye-slash"
                    onClick = {() => setShowPassword(false)}
                />;
        }else{
            return <i 
                    className="far fa-eye"
                    onClick = {() => setShowPassword(true)}
                />;
        }
    }

    const [account, setAccount] = useState({
        email: "",
        password: "",
    });

    const clickLogin = (e) => {
        e.preventDefault();
        onLogin(account);
    }

    const onChange = e => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div id="wrapper-login">
            <form id="form-login">
                <h1 className="form-header">Login form</h1>
                <div className="form-group">
                    <i className="fas fa-user"/>
                    <input 
                        type="email" className="form-input" 
                        placeholder="Email" name="email" 
                        value={account.email}
                        onChange={(e) => onChange(e)}    
                    />
                </div>
                <div className="form-group">
                    <i className="fas fa-key"></i>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        className="form-input passWord" 
                        placeholder="Password" name="password" 
                        value={account.password}
                        onChange={(e) => onChange(e)}  
                    />
                    <div id="eye">
                        {buttonShowPassword(showPassword)}
                    </div>
                </div>
                <div className="form-check-ask">
                    <div>
                        <input type="checkbox" value="LOGIN" className="form-check"/>
                        <span>Remember me</span>
                    </div>
                    <div>
                        <a>Forgot password?</a>
                    </div>
                </div>
                <input type="submit" value="LOGIN" className="form-submit"
                    onClick={(e) => clickLogin(e)}
                />
                <input type="submit" value="REGISTER" className="form-submit"
                    onClick={() => onRegister()}
                />
            </form>
        </div>
    );
}

/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
    return { 
        accounts: state.accounts,
        notice: state.notice,
    };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogin: (account) => {
            dispatch(actions.actLogin(account));
        },
        onClearLoginSuccess: () => {
            dispatch(actions.actClearLoginSuccess());
        },
        onChangeStatusNotice: (status) => {
            dispatch(actions.actChangeStatusNotice(status));
        },
        onChangeNotice: (content, typeNotice) => {
            dispatch(actions.actChangeNotice(content, typeNotice));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);