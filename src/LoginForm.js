import React, { useState } from "react";
import "./Master.css";
import CreateAccountForm from "./CreateAccountForm";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  const navigate = useNavigate();

  return (
    <form onSubmit={submitHandler}>
      <div class="TopContainer">
        <div className="BackArrow">
          <button onClick={() => navigate(-1)}>go back</button>
        </div>
        <h2>Welcome back!</h2>
        <p>Please enter your account details here</p>
      </div>
      <div className="MainContainer">
      <div className="form-inner">
        {error != "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
            value={details.username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGIN" class="LoginButton"/>

        <div className="CreateAccountButton">
          <Link to="/CreateAccountForm">
            <button class= "SignUpButton">New user? Create Account</button>
          </Link>
        </div>
        </div>
      </div>
    </form>
    // TODO: Add forgot password button
  );
}

export default LoginForm;
