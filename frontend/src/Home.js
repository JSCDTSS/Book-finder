import React, { useState } from 'react';
import NavBar from './NavBar';
import './Master.css';

import { Link } from "react-router-dom";


function Home() {

    return (
        <div className="Home">
            <div className="TopContainer">
                <p>this is Home page</p>
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