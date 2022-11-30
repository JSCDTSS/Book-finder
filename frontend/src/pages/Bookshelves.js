import React from "react";
import CheckPermission from "../components/CheckPermission";
import NavBar from "../components/NavBar";
import "../Master.css";

function Bookshelves() {
  return (
    <CheckPermission permission="member" redirect="/Home">
      <div className="bgContainer">
        <div className="TopContainer">
          <h2>My Bookshelves</h2>
          <p>All your favourite books in one place...</p>
        </div>
        <div className="MainContainer"></div>
        <div className="BottomContainer">
          <NavBar />
        </div>
      </div>
    </CheckPermission>
  );
}
export default Bookshelves;
