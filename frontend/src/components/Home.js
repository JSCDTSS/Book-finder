import React, { useState } from 'react';
import NavBar from './NavBar';
import '../Master.css';
import { Link, useLocation } from "react-router-dom";
import Bell from '../icons/bell.svg';
import CheckLogin from './CheckLogin';
import SearchBar from './SearchBar';
import DisplayContainer from './DisplayContainer';

function Home() {
  const location = useLocation()
  console.log(location.state)

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
          <SearchBar/>
          <DisplayContainer title='Suggested Books'/>
          <DisplayContainer title='Trending Books'/>
          <DisplayContainer title='Follower Updates'/>
        </div>
        <div className="BottomContainer">
          <NavBar />
        </div>
      </div>
    </>
  );
}

export default Home;