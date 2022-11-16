import React, { useState } from 'react';
import './Master.css';
import { useNavigate, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

function App() {
  const adminUser = {
    email: "a@a.com",
    password: "123"
  }

  const [user, setUser] = useState({ username: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged In");
      setUser({
        username: details.username,
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({ username: "", email: "" });
  }


  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <Home />
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;