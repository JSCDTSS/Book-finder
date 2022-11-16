import React, { useState } from 'react';
import '../Master.css';


function ForgotPasswordForm() {

    return (
        <form>
            <div className="TopContainer">
                <p>Password recovery</p>
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
            </div>
            <div className="BottomContainer">
            </div>
        </form>
    );
}

export default ForgotPasswordForm;