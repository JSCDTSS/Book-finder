import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../Master.css';
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
          books.slice(0, 30).map(book => ({
            image: book.imageLinks.thumbnail
          }))
        )
        setTrending(
          books.slice(30, 60).map(book => ({
            image: book.imageLinks?.thumbnail
          }))
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
          <h1>Home</h1>
          <img src={Bell} alt="Notification Bell" />
        </div>
        <div className="MainContainer">

          <SearchBar />
          {isLoadingData()
            ? <SplashPage />
            : <>
              <div className='HomeContentTitle'>
                <p>Suggested Books</p>
              </div>
              <DisplayContainer items={suggested} />
              <div className='HomeContentTitle'>
                <p>Popular Books</p>
              </div>
              <DisplayContainer items={trending} />

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