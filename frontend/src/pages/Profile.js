import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import '../Master.css';

import DisplayContainer from '../components/DisplayContainer';
import ProfileInfo from '../components/ProfileInfo';


function Profile() {

  const [profileInfo, setProfileInfo] = useState({})
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
        <ProfileInfo profileInfo={profileInfo} />
        <DisplayContainer title='Bookshelves' />
      </div>

      <div className="BottomContainer">
        <NavBar />
      </div>
    </div>
  );
}

export default Profile;