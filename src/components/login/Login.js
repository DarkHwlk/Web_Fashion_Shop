import React, {useState} from "react";
import {connect} from 'react-redux';

/* Components */
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

function Login() {

    const [login, setLogin]  =useState(true);

    return (
        <div id="wrapper-content">
            {login ? 
                <FormLogin onRegister={() => setLogin(false)}/> 
            :   <FormRegister onLogin={() => setLogin(true)}/>}
            <div className="bg-login">
                <img src="./Pictures/bg-login.jpg"/>
            </div>
        </div>
    );
}

export default Login;