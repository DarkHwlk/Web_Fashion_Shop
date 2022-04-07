import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
/* Router */
import {NavLink} from 'react-router-dom';

import * as actions from '../../actions/index';
import accounts from "../../reducers/accounts";

function FormRegister(props) {

    const {accounts, onRegister, onChangeStatusNotice, onChangeNotice} = props;

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
        if(account.name===""){
            onChangeNotice(`Please enter your name.`,"WARNING");
            onChangeStatusNotice(true);
        }else if(account.email===""){
            onChangeNotice(`Please enter your email.`,"WARNING");
            onChangeStatusNotice(true);
        }else if(account.password===""){
            onChangeNotice(`Please enter your password.`,"WARNING");
            onChangeStatusNotice(true);
        }else if((account.name!=="")&&(account.password!=="")&&(account.email!=="")){
            if(tmpPassword === account.password){
                onChangeNotice(`Register is successful.`,"SUCCESS");
                onChangeStatusNotice(true);
                onRegister(account);
            }else{
                onChangeNotice(`Re-typing password is wrong.`,"WARNING");
                onChangeStatusNotice(true);
            }
        }
    }

    return (
        <div id="wrapper-content">
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
                    <NavLink to='/login'>
                        <input type="submit" value="LOGIN" 
                            className="form-submit"
                        />
                    </NavLink>
                </form>
            </div>
            <div className="bg-login">
                <img src="./Pictures/bg-login.jpg"/>
            </div>
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