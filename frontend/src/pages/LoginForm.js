import React, { useEffect, useState } from "react";
import "../Master.css";
import { Link, useNavigate } from "react-router-dom";
import TextForm from "../components/TextForm";
import { login } from '../utils/backendRequest';
import BackArrow from "../components/BackArrow"

function LoginForm() {
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

  useEffect(() => {
    if (validation) {
      navigate('/Home', { state: validation })
    }
  }, [validation])

  const navigate = useNavigate();

  return (
    <form onSubmit={submitHandler}>
      <div className="TopContainer">
        <BackArrow />
        <h2>Welcome back!</h2>
        <p>Please enter your account details here</p>
      </div>
      <div className="LoginBackImage">
        <div className="MainContainer">
          <div className="FormInner">
            {error !== "" ? <div className="Error">{error}</div> : ""}

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
              isPassword
            />

            <input type="submit" value="Login" className="LoginButton" />

            <div className="CreateAccountButton">
              <Link to="/CreateAccountForm">
                <button className="SignUpButton">New user? Create Account</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
