import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import '../Master.css';
import { Link, useLocation } from "react-router-dom";
import Bell from '../icons/bell.svg';
import CheckLogin from '../components/CheckLogin';
import SearchBar from '../components/SearchBar';
import DisplayContainer from '../components/DisplayContainer';
import getBooksByPreferences from '../utils/getBookPreferences';
import SplashPage from './SplashPage'

function Home() {
  const [suggested, setSuggested] = useState('loading')
  const [trending, setTrending] = useState('loading')
  const preferences = useLocation()?.state?.preferences

  useEffect(() => {
    getBooksByPreferences(preferences)
      .then(books => {
        console.log(books)
        setSuggested(
          books.slice(0, 3)
        )
        setTrending(
          books.slice(3, 6)
        )
      })
  }, [])

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