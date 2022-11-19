import React, { useState } from 'react';
import '../Master.css';
import PasswordReset from "../Images/PasswordReset.gif"
import { useNavigate } from "react-router-dom";
import BackArrow from "../icons/arrow-left.svg";


function ForgotPasswordForm() {

    const navigate = useNavigate();

    return (
        <form>
            <div className="TopContainer">
                { /* Glitch with backarrow - doesn't stay on page that it has moved back to */}
            <div className="BackArrow">
                <img src={BackArrow} onClick={() => navigate(-1)} />
        </div>
                <h2>Password recovery</h2>
                <p>Enter your email to recover your password</p>
            </div>
            <div className="MainContainer">
            <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
            />
            </div>
            <button>Send Email</button>
            <div>
            <img src={PasswordReset} alt="Two people carrying a key to the left of a login forum"/>
        </div>
            </div>
            <div className="BottomContainer">
         
            </div>
        </form>
    );
}

export default ForgotPasswordForm;