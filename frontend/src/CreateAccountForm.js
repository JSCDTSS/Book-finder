import React, { useState } from "react";
import "./Master.css";
import { useNavigate } from "react-router-dom";
import SignUpImage from "./Images/SignUp.png";
import TextForm from "./TextForm";
import { createAccount } from './utils/backendRequest';

function CreateAccountForm({ Create, error }) {
  const [details, setDetails] = useState({ 
    username: "", firstName: "", lastName: "", email: "", password: "", 
  });

  const submitHandler = (e) => {
    e.preventDefault();
    createAccount(details);
    //then redirect to other page
  };

  const navigate = useNavigate();

  return (
    <form onSubmit={submitHandler}>
      <div className="TopContainer">
        <div className="BackArrow">
          <button onClick={() => navigate(-1)}>go back</button>
        </div>
        <h2>Create your account</h2>
        <p>Please enter your account details here</p>
      </div>
      <div className="MainContainer">
        <div className="form-inner">
          {error !== "" ? <div className="error">{error}</div> : ""}

          <TextForm
            id="username"
            text="Username"
            details={details}
            setDetails={setDetails}
          />
          <TextForm
            id="firstName"
            text="First Name"
            details={details}
            setDetails={setDetails}
          />
          <TextForm
            id="lastName"
            text="Last Name"
            details={details}
            setDetails={setDetails}
          />
          <TextForm
            id="email"
            text="Email"
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
        </div>
        <div>
          <img src={SignUpImage} alt="Man signing up on a tablet" />
        </div>
      </div>
    </form>
  );
}

export default CreateAccountForm;
