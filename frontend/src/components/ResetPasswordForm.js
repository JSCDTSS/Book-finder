import React, { useState } from 'react';
import '../Master.css';


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
            </div>
        </form>
    );
}

export default ResetPasswordForm;