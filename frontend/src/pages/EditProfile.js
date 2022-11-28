
import BackArrow from './../components/BackArrow';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { updateSelf } from '../utils/backendRequest';

const genreList = [
  'romance', 'educational', 'sci-fi', 'fantasy', 'horror',
  'manga', 'historical', 'spirituality', 'crime', 'travel'
]


export default function EditProfile() {
  const location = useLocation()
  const navigate = useNavigate()
  const [preferences, setPreferences] = useState(location.state.preferences)

  useEffect(() => {
    console.log(location.state)
  }, [preferences])

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

  function setLowerBound(e) {
    if (!isNaN(e.target.value)) {
      setPreferences(prev => ({
        ...prev,
        pagesLowerBound: e.target.value
      }))
    }
  }

  function setUpperBound(e) {
    if (!isNaN(e.target.value)) {
      setPreferences(prev => ({
        ...prev,
        pagesUpperBound: e.target.value
      }))
    }
  }

  function updatePreferences() {
    updateSelf(location.state.token, preferences)
      .then(res => {
        console.log(res.data)
        navigate('/Profile', { state: res.data })
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
    <input type='text' id='lowerBound' value={preferences.pagesLowerBound} onChange={setLowerBound} />
    <input type='text' id='upperBound' value={preferences.pagesUpperBound} onChange={setUpperBound} />
    <div></div>
    <button onClick={updatePreferences}>Update Preferences</button>
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
