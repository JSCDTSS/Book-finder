import React, { useState } from 'react';
import NavBar from './NavBar';
import './Master.css';
import { Link } from "react-router-dom";
import Bell from './icons/bell.svg';

function Home() {

    return (
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
    );
}

export default Home;