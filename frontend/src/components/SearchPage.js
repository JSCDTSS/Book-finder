import React, { useState } from 'react';
import NavBar from './NavBar';
import '../Master.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';


function Search() {

  /**
   * make client side request based off search criteria to 
   * googleBooks api 
   */

  return (
    <div className="Search">
      <div className="TopContainer">
        <SearchBar/>
      </div>
      <div className="MainContainer">
        <SearchResults/>
      </div>
      <div className="BottomContainer">
        <NavBar />
      </div>
    </div>
  );
}

export default Search;