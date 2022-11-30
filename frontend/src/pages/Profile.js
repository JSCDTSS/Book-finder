import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../Master.css";
// import Hamburger from '../icons/hamburger.svg';
import DisplayContainer from "../components/DisplayContainer";
import ProfileInfo from "../components/ProfileInfo";
import CheckPermission from "../components/CheckPermission";

function Profile() {
  const [profileInfo, setProfileInfo] = useState({});
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
    <div className="bgContainer">

    <CheckPermission permission="member" redirect="/Home">
      <div className="profile">
        <div className="TopContainer">
          <h2>Profile</h2>
        </div>

        <div className="MainContainer">
          <ProfileInfo profileInfo={profileInfo} />
        </div>
        <div className="BottomContainer">
          <NavBar />
        </div>
      </div>
    </CheckPermission>
    </div>
  );
}

export default Profile;
