import React, { useState } from 'react';
import NavBar from './NavBar';
import '../Master.css';

import { Link } from "react-router-dom";
import DisplayContainer from './DisplayContainer';
import ProfileInfo from './ProfileInfo';


function Profile() {
  const [profileInfo,setProfileInfo] = useState({})
  /**
   * show some profile info
   *   name
   *   profile picutre
   *   follows
   *   edit button
   *      when edit button clicked
   *        load from database,
   *        display current info
   *        show form to update that info
   * 
   * show bookshelves
   */
  return (
    <div className="profile">
      <div className="TopContainer">
        <p>Profile</p>
      </div>
      <div className="MainContainer">
        <Link to="/LandingPage">
          <button className="SignUpButton">landinggggg</button>
        </Link>
      </div>
      <ProfileInfo profileInfo={profileInfo}/> 
      <DisplayContainer title='Bookshelves'/>
      <div className="BottomContainer">
        <NavBar />
      </div>
    </div>
  );
}

export default Profile;