import React, { useState } from 'react';
import '../Master.css';
import Password from "../Images/Password.png"

function ResetPasswordForm() {

    return (
        <form>
            <div className="TopContainer">
                <p>Password recovery</p>
                <p>Enter your email to recover your password</p>
            </div>
            <div className="MainContainer">
            <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
            />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
            </div>
            <button>Send Email</button>
            </div>
            <div className="BottomContainer">
            <div>
            <img src={Password} alt="Phone with lock symbol"/>
        </div>
            </div>
        </form>
    );
}

export default ResetPasswordForm;