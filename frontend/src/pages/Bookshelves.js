import React from 'react';
import CheckPermission from '../components/CheckPermission';
import NavBar from '../components/NavBar';
import '../Master.css';


function Bookshelves() {

  return (
    <CheckPermission permission='member' redirect='/Home'>
      <div className="Bookshelves">
        <div className="TopContainer">
          <p>this is Bookshelves page</p>
        </div>
        <div className="MainContainer">
        </div>
        <div className="BottomContainer">
          <NavBar />
        </div>
      </div>
    </CheckPermission>
  );
}

export default Bookshelves;