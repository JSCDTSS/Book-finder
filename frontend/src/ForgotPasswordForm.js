import React, { useState } from 'react';
import NavBar from './NavBar';
import './Master.css';


function ForgotPasswordForm() {

    return (
        <form>
            <div className="TopContainer">
                <p>this is ForgotPasswordForm page</p>
            </div>
            <div className="MainContainer">
            </div>
            <div className="BottomContainer">
                <NavBar />
            </div>
        </form>
    );
}

export default ForgotPasswordForm;