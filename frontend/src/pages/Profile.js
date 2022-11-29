import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import '../Master.css';

import DisplayContainer from '../components/DisplayContainer';
import ProfileInfo from '../components/ProfileInfo';
import CheckPermission from '../components/CheckPermission';


function Profile() {

  const [profileInfo, setProfileInfo] = useState({})

  return (
    <CheckPermission permission='member' redirect='/Home'>
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
    </CheckPermission>
  );
}

export default Profile;