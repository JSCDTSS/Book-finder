import React, { useState } from "react";
import "./Master.css";
import { useNavigate } from "react-router-dom";
import SignUpImage from "./Images/SignUp.png";

function CreateAccountForm({ Create, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Create(details);
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
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={(e) =>
              setDetails({ ...details, firstName: e.target.value })
            }
            value={details.firstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={(e) =>
              setDetails({ ...details, lastName: e.target.value })
            }
            value={details.lastName}
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
        <input type="submit" value="LOGIN" className="LoginButton" />
        </div>
        <div>
          <img src={SignUpImage} alt="Man signing up on a tablet"/>
        </div>
      </div>
    </form>
  );
}

export default CreateAccountForm;
