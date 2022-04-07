import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';

import * as actions from '../../actions/index';
import accounts from "../../reducers/accounts";

function FormRegister(props) {

    const {accounts, onRegister, onChangeStatusNotice, onChangeNotice,
        onLogin} = props;

    const [account, setAccount] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [tmpPassword, setTmpPassword] = useState("");

    const onChange = e => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    }

    const clickRegister = (e) => {
        e.preventDefault();
        if(tmpPassword === account.password){
            onChangeNotice(`Register is successful.`,"SUCCESS");
            onChangeStatusNotice(true);
            onRegister(account);
        }else{
            onChangeNotice(`Re-typing password is wrong.`,"WARNING");
            onChangeStatusNotice(true);
        }
    }

    const clickLogin = (e) => {
        e.preventDefault();
        onLogin();
    }

    return (
        <div id="wrapper-login">
            <form id="form-login">
                <h1 className="form-header">Register form</h1>
                <div className="form-group">
                    <i className="fas fa-user"/>
                    <input 
                        type="text" className="form-input" 
                        placeholder="Name" name="name"  
                        value={account.name}
                        onChange={(e) => onChange(e)}  
                    />
                </div>
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
                        type="password"
                        className="form-input passWord" 
                        placeholder="Password" name="password" 
                        value={account.password}
                        onChange={(e) => onChange(e)}  
                    />
                </div>
                <div className="form-group">
                    <i className="fas fa-key"></i>
                    <input 
                        type="password"
                        className="form-input passWord" 
                        placeholder="Password again" name="password" 
                        onChange={(e) => setTmpPassword(e.target.value)}  
                    />
                </div>

                <input type="submit" value="REGISTER" className="form-submit"
                    onClick={(e) => clickRegister(e)}
                />
                <input type="submit" value="LOGIN" className="form-submit"
                    onClick={(e) => clickLogin(e)}
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
        onRegister: (account) => {
            dispatch(actions.actRegister(account));
        },
        onChangeStatusNotice: (status) => {
            dispatch(actions.actChangeStatusNotice(status));
        },
        onChangeNotice: (content, typeNotice) => {
            dispatch(actions.actChangeNotice(content, typeNotice));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);