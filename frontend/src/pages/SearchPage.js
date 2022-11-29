import React, { useState } from 'react';

import '../Master.css';
import Arrow from '../icons/arrow-right.svg';
import getBooks from '../utils/request';

import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import SearchButtons from './SearchButtons';
import CheckPermission from '../components/CheckPermission';

function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searchType, setSearchType] = useState('genres')

  function makeRequest() {
    const request = { [searchType]: [searchValue] }

    getBooks(request)
      .then(res => {
        setSearchResults(res)
      })

  }

  function updateSearchBar(e) {
    setSearchValue(e.target.value)
  }

  return (
    <CheckPermission permission='basic'>
      <div className="Search">
        <div className="TopContainer">
          <SearchBar
            value={searchValue} setValue={updateSearchBar}
          />
          <SearchButtons
            type={searchType} setType={setSearchType} />
          <img src={Arrow} onClick={makeRequest} alt="Search button" />
        </div>
        <div className="MainContainer">
          <SearchResults items={searchResults} />
        </div>
        <div className="BottomContainer">
          <NavBar />
        </div>
      </div>
    </CheckPermission>
  );
}

export default Search;