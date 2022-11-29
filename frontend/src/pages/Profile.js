import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import '../Master.css';
// import Hamburger from '../icons/hamburger.svg';
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
        <h2>Profile</h2>
        {/* <img src={Hamburger} alt="Hamburger Menu" /> */}
        </div>

      <div className="MainContainer">
      <ProfileInfo profileInfo={profileInfo} />
        <div ClassName='HomeContentTitle'>
          <p>Favourites</p>
        </div>
        <DisplayContainer />
        <div ClassName='HomeContentTitle'>
          <p>Bookshelves</p>
        </div>
        <DisplayContainer />
        <div ClassName='HomeContentTitle'>
          <p>Groups</p>
        </div>
        <DisplayContainer />
      </div>

      <div className="BottomContainer">
        <NavBar />
      </div>
    </div>
  );
}

export default Profile;