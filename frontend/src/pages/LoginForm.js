import React, { useState } from "react";
import "../Master.css";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../Images/Login.png";
import TextForm from "../components/TextForm";
import { login } from '../utils/backendRequest';
import BackArrow from "../components/BackArrow"

function LoginForm({ Login }) {
  const [details, setDetails] = useState({
    uniqueId: "",
    password: ""
  });
  const [error, setError] = useState(false)
  const [validation, setValidation] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault();
    login(details)
      .then(res => {
        setValidation(res.data)
      })
      .catch(err => {
        setError(err.response.data.error)
      })
  };

  const navigate = useNavigate();

  return (
    <>
      {validation && navigate('/Home', { state: validation })}
      {error && <p>{error}</p>}
      <form onSubmit={submitHandler}>
        <div className="TopContainer">
        <BackArrow />
          <h2>Welcome back!</h2>
          <p>Please enter your account details here</p>
        </div>
        <div className="MainContainer">
          <div className="form-inner">
            {error !== "" ? <div className="error">{error}</div> : ""}

            <TextForm
              id="uniqueId"
              text="Username/Email"
              details={details}
              setDetails={setDetails}
            />

            <TextForm
              id="password"
              text="Password"
              details={details}
              setDetails={setDetails}
            />

            <input type="submit" value="LOGIN" className="LoginButton" />

            <div className="CreateAccountButton">
              <Link to="/CreateAccountForm">
                <button className="SignUpButton">New user? Create Account</button>
              </Link>
            </div>
            <div className="ForgotPasswordButton">
              <Link to="/ForgotPasswordForm">
                <button className="ForgotPasswordButton">Forgot Password?</button>
              </Link>
            </div>
          </div>
          <div>
            <img src={LoginImage} alt="Women logging into a computer" />
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginForm;