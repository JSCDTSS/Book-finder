import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import '../Master.css';
import { useLocation } from "react-router-dom";
import DisplayContainer from '../components/DisplayContainer';
import getBooksByPreferences from '../utils/getBookPreferences';
import { SpinningCircles } from 'react-loading-icons'
import CheckPermission from '../components/CheckPermission';
import randomPreference from './../utils/randomPreferences';

function Home() {
  const [suggested, setSuggested] = useState('loading')
  const [trending, setTrending] = useState('loading')
  const preferences = useLocation()?.state?.preferences
  useEffect(() => {
    const searchPreferences = checkPreferencesAreSet()
      ? preferences : randomPreference()
    getBooksByPreferences(searchPreferences)
      .then(books => {
        setSuggested(
          books.slice(0, 30)
        )
        setTrending(
          books.slice(30, 60)
        )
      })
  }, [preferences])

  function checkPreferencesAreSet() {
    return Boolean(preferences?.genres?.length)
  }

  function isLoadingData() {
    return suggested === 'loading' || trending === 'loading'
  }

  return (
    <div className="bgContainer">

      <CheckPermission permission='basic'>
        <div className="Home">
          <div className="TopContainer">
            <h3>Home</h3>
          </div>
          <div className="MainContainer">
            {isLoadingData()

              ? <div className='SpinningCircles'>
                <SpinningCircles fill='#000' width={100} />
              </div>
              : <>
                <div className='HomeContentTitle'>
                  <p>Suggested Books</p>
                  <DisplayContainer items={suggested} />
                </div>
                <div className='HomeContentTitle'>
                  <p>Popular Books</p>
                  <DisplayContainer items={trending} />
                </div>
              </>
            }
          </div>
          <div className="BottomContainer">
            <NavBar />
          </div>
        </div>
      </CheckPermission>
    </div>
  )

}

export default Home;