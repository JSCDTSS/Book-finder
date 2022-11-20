import React, { useState } from 'react';
import NavBar from './NavBar';
import '../Master.css';
import { Link, useLocation } from "react-router-dom";
import Bell from '../icons/bell.svg';
import CheckLogin from './CheckLogin';

function Home() {
  return (
    <>
      <CheckLogin/>
      <div className="Home">
        <div className="TopContainer">
          <p>Home</p>
          <img src={Bell} alt="Notification Bell" />
        </div>
        <div className="MainContainer">
          <Link to="/LandingPage">
            <button className="SignUpButton">landinggggg</button>
          </Link>
        </div>
        <div className="BottomContainer">
          <NavBar />
        </div>
      </div>
    </>
  );
}

export default Home;