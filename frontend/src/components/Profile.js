import React, { useState } from 'react';
import NavBar from './NavBar';
import '../Master.css';

import { Link } from "react-router-dom";


function Profile() {

    return (
        <div className="profile">
            <div className="TopContainer">
                <p>this is profile page</p>
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

export default Profile;