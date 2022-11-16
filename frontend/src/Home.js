import React, { useState } from 'react';
import LandingPage from './LandingPage';
import NavBar from './NavBar';

function Home() {
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
    <div className="Home">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.username}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LandingPage />
      )}

      <NavBar />

    </div>

  );
}

export default Home;