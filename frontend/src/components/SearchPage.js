import React, { useState } from 'react';
import NavBar from './NavBar';
import '../Master.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import getBooks from '../utils/request'

const testPreferences = {
  authors: [],
  genres: [],
  types: []
}

function Search() {
  const [searchValue,setSearchValue] = useState('')
  const [searchResults,setSearchResults] = useState([])
  /**
   * make client side request based off search criteria to 
   * googleBooks api 
   */

  function makeRequest(){
    const tempReq = {
      ...testPreferences,
      genres: [searchValue]
    }
    if (!searchValue) {
      tempReq.genres = []
    }
    console.log(tempReq)
    getBooks(tempReq)
      .then(res => {
        setSearchResults(res)
      })

  }

  function updateSearchBar(e){
    setSearchValue(e.target.value)
  }

  return (
    <div className="Search">
      <div className="TopContainer">
        <SearchBar value={searchValue} setValue={updateSearchBar}/>
        <button onClick={makeRequest}>{'->'}</button>
      </div>
      <div className="MainContainer">
        <SearchResults items={searchResults}/>
      </div>
      <div className="BottomContainer">
        <NavBar />
      </div>
    </div>
  );
}

export default Search;