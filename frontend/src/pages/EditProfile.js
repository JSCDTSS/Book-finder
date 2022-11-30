
import BackArrow from './../components/BackArrow';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { updateSelf } from '../utils/backendRequest';
import { genreList } from '../constants'

export default function EditProfile() {
  const location = useLocation()
  const navigate = useNavigate()
  const [preferences, setPreferences] = useState(location.state.preferences)

  function setGenres(e) {
    setPreferences(prev => {
      let newGenres = prev.genres
      if (e.target.checked) {
        newGenres.push(e.target.id)
      } else {
        newGenres = prev.genres.filter(genre => genre !== e.target.id)
      }
      // this is to dedup
      newGenres = [...new Set(newGenres)]
      return {
        ...prev,
        genres: newGenres
      }
    })
  }

  function updatePreferences() {
    updateSelf(location.state.token, preferences)
      .then(res => {
        navigate('/Profile', { state: res.data })
      })
  }

  function setBound(e, preference) {
    if (!isNaN(e.target.value)) {
      setPreferences(prev => ({
        ...prev,
        [preference]: e.target.value
      }))
    }
  }


  return <>
    <BackArrow />
    <h2>Genres</h2>
    {genreList.map(genre =>
      <div key={genre} >
        <label>{genre}</label>
        <input type="checkbox" id={genre} value={genre}
          checked={preferences.genres.includes(genre)}
          onChange={setGenres}
        />
      </div>
    )}
    <h2>Page Numbers</h2>
    <p>Lower Bound</p>
    <input
      type='text'
      id='lowerBound'
      value={preferences.pagesLowerBound}
      onChange={e => setBound(e, 'pagesLowerBound')}
    />
    <p>Upper Bound</p>
    <input
      type='text'
      id='upperBound'
      value={preferences.pagesUpperBound}
      onChange={e => setBound(e, 'pagesUpperBound')}
    />
    <button className='UpdatePreferences' onClick={updatePreferences}>Update Preferences</button>
  </>


}
