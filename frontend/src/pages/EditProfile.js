
import BackArrow from './../components/BackArrow';
import { useLocation } from 'react-router-dom';
import Radio from './../components/Radio';
import { useState, useEffect } from 'react';

const genreList = [
  'romance', 'educational', 'sci-fi', 'fantasy', 'horror',
  'manga', 'historical', 'spirituality', 'crime', 'travel'
]
const pageBoundsList = [
  
]

export default function EditProfile() {
  const location = useLocation()
  const [preferences, setPreferences] = useState(location.state.preferences)

  useEffect(() => {
    console.log(preferences)
  },[])

  function setGenres(e) {
    setPreferences(prev => {
      let newGenres = prev.genres
      if (e.target.checked) {
        newGenres.push(e.target.id)
      } else {
        newGenres = prev.genres.filter(genre => genre !== e.target.id)
      }
      // for some reason this function triggers twice, so we need to dedup
      newGenres = [...new Set(newGenres)] 
      return {
        ...prev,
        genres: newGenres
      }
    })
  }



  return <>
    <BackArrow />
    <p>genres</p>
    {genreList.map(genre =>
      <div key={genre} >
        <label>{genre}</label>
        <input type="checkbox" id={genre} value={genre}
          checked={preferences.genres.includes(genre)}
          onChange={setGenres}
        />
      </div>
    )}
    <p>page numbers</p>


    <button>save</button>
  </>


}

/**
 * page numbers
 *    < 60
 *    60-100
 *    101-200
 *    201+
 * 
 */