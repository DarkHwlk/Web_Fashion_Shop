import React from "react";
import {connect} from 'react-redux';

/* components */
import Login from "./login/Login";

function ProfileContainer() {
    return (
        <div id="wrapper-content">
            <div className="headline">
                <h3>PROFILE</h3>
            </div>
        </div>
    );
}

export default ProfileContainer;