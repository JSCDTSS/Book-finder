import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../Master.css";
import ProfileInfo from "../components/ProfileInfo";
import CheckPermission from "../components/CheckPermission";

function Profile() {

  return (
    <div className="bgContainer">

    <CheckPermission permission="member" redirect="/Home">
      <div className="profile">
        <div className="TopContainer">
          <h2>Profile</h2>
        </div>

        <div className="MainContainer">
          <ProfileInfo/>
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
