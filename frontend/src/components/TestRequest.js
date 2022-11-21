
import getBooks from '../utils/request'

const testPreferences = {
  authors: ['Brittany Nightshade'],
  genres: ['Fantasy'],
  types: ['Fiction']
}

export default function TestRequest(){
  function req(){
    console.log('here')
    getBooks(testPreferences)
      .then(console.log)
  }

  return <div>
    <button onClick={req}>Test Request</button>
  </div>
}

/**
 * when doing a manual search or filling home based on 
 * preferences, make a request to google api with parameters
 * 
 * take response, order and filter according to parameters,
 * return relevant data
 */