import React, { useState } from "react";
import "../Master.css";
import { useNavigate } from "react-router-dom";
import SignUpImage from "../Images/SignUp.png";
import TextForm from "../components/TextForm";
import { createAccount } from '../utils/backendRequest';
import BackArrow from "../components/BackArrow";


function CreateAccountForm() {
  const [details, setDetails] = useState({
    username: "", firstName: "", lastName: "", email: "", password: "",
  });
  const [errors, setErrors] = useState([])
  const [validation, setValidation] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
    createAccount(details)
      .then(res => {
        console.log('success!')
        setValidation(res.data)
      })
      .catch(err => {
        setErrors(err?.response?.data?.errors)
      })
    //then redirect to other page
  };

  const navigate = useNavigate();

  return (
    <>
      {validation && navigate('/Home', { state: validation })}
      <form onSubmit={submitHandler}>
        <div className="TopContainer">
          <BackArrow />
          <h2>Create your account</h2>
          <p>Please enter your account details here</p>
        </div>
        <div className="MainContainer">
          <div className="form-inner">
            <div className="errors">
              {errors.map((error, i) => {
                return <div key={i}>{error}</div>
              })}
            </div>
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

            <input type="submit" value="SUBMIT" className="LoginButton" />
          </div>
          <div>
            <img src={SignUpImage} alt="Man signing up on a tablet" />
          </div>
        </div>
      </form>
    </>
  );
}

export default CreateAccountForm;
