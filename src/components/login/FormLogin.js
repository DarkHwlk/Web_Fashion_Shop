import React, {useState} from "react";
import {connect} from 'react-redux';

function FormLogin(props) {

    const {onRegister} = props;

    const [account, setAccount] = useState({
        email: "",
        password: "",
    });

    const onLogin = (e) => {
        e.preventDefault();
        console.log(account);
    }

    const submitHandler = e => {
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
                        placeholder="Email" name="email" value={account.email}
                        onChange={(e) => onChange(e)}    
                    />
                </div>
                <div className="form-group">
                    <i className="fas fa-key"></i>
                    <input 
                        type="password" className="form-input passWord" 
                        placeholder="Password" name="password" value={account.password}
                        onChange={(e) => onChange(e)}  
                    />
                    <div id="eye">
                        <i className="far fa-eye"/>
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
                    onClick={(e) => onLogin(e)}
                />
                <input type="submit" value="REGISTER" className="form-submit"
                    onClick={() => onRegister()}
                />
            </form>
        </div>
    );
}

export default FormLogin;