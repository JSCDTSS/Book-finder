import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import '../Master.css';
import { Link, useLocation } from "react-router-dom";
import Bell from '../icons/bell.svg';
import CheckLogin from '../components/CheckLogin';
import SearchBar from '../components/SearchBar';
import DisplayContainer from '../components/DisplayContainer';
import TestRequest from '../components/TestRequest';
import getBooks from '../utils/request'
import SplashPage from './SplashPage'

const testPreferences = {
  authors: ['Brittany Nightshade'],
  genres: ['Fantasy'],
  types: ['Fiction']
}

function Home() {
  const [suggested, setSuggested] = useState('loading')
  const [trending, setTrending] = useState('loading')

  useEffect(() => {
    getBooks(testPreferences)
      .then(books => {
        setSuggested(
          books.slice(0, 3).map(book => ({
            image: book.imageLinks.thumbnail
          }))
        )
        setTrending(
          books.slice(3, 6).map(book => ({
            image: book.imageLinks?.thumbnail
          }))
        )
      })
  }, [])

  /**
   * read the user's preferences, make a client side request to get 
   * googleBooks api based off of the users preferences
   * 
   * when the user is authenticated by server in, return a token,
   * and also 
   *    account info required to make front end request
   */

  function isLoadingData() {
    return suggested === 'loading' || trending === 'loading'
  }

  return (
    <>
      <CheckLogin />
      <div className="Home">
        <div className="TopContainer">
          <p>Home</p>
          <img src={Bell} alt="Notification Bell" />
        </div>
        <div className="MainContainer">

          <SearchBar />
          {isLoadingData()
            ? <SplashPage />
            : <>
              <DisplayContainer title='Suggested Books' items={suggested} />
              <DisplayContainer title='Trending Books' items={trending} />

            </>
          }
        </div>
        <div className="BottomContainer">
          <NavBar />
        </div>
      </div>
    </>
  )

}

export default Home;