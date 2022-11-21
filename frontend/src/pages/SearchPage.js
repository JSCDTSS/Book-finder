import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import '../Master.css';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import getBooks from '../utils/request';
import Arrow from '../icons/arrow-right.svg';

const testPreferences = {
  authors: [],
  genres: [],
  types: []
}

function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  /**
   * make client side request based off search criteria to 
   * googleBooks api 
   */

  function makeRequest() {
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

  function updateSearchBar(e) {
    setSearchValue(e.target.value)
  }

  return (
    <div className="Search">
      <div className="TopContainer">
        <SearchBar value={searchValue} setValue={updateSearchBar} />
        <img src={Arrow} onClick={makeRequest} alt="Search button" />
      </div>
      <div className="MainContainer">
          <SearchResults items={searchResults} />
      </div>
      <div className="BottomContainer">
        <NavBar />
      </div>
    </div>
  );
}

export default Search;