

import axios from 'axios'

const booksApi = axios.create({
  baseURL: 'https://www.googleapis.com',
  method: 'get',
  timeout: 1000
})

function createPipeAsync(...functions) {
  return function (initialValue) {
    return functions.reduce(
      (input, _function) => input.then(_function),
      Promise.resolve(initialValue)
    )
  }
}

function searchVolumes(params) {
  return booksApi.request({
    url: '/books/v1/volumes',
    params,
  })
}

function parseBasicInfo(res) {
  if (!res.data.items) return []
  return res.data.items.map(item => ({
    ...item.volumeInfo
  }))
}

const getBookInfo = createPipeAsync(
  searchVolumes, parseBasicInfo
)

async function getBooksByPreference(preferences) {
  let [byAuthors, byGenres, byTitles] = [[], [], []]
  if (preferences?.authors?.length) {
    byAuthors = await getBooksByCategory('inauthor', preferences.authors)
  }
  if (preferences?.genres?.length) {
    byGenres = await getBooksByCategory('subject', preferences.genres)
  }
  if (preferences?.titles?.length) {
    byTitles = await getBooksByCategory('', preferences.titles)
  }
  return [
    byAuthors,
    byGenres,
    byTitles
  ].flat(2)
}

function getBooksByCategory(fieldType, preferenceCategories) {
  return Promise.all(preferenceCategories.map(category => {
    return getBookInfo({
      q: `${fieldType}:${category}`
    })
  }))
}

export default getBooksByPreference

/**
 * preferences
 *      genres
 *      authors
 *      types (fiction, non fiction)
 *
 * pages can't be queried for, so we filter afterwards
 *
 * when the user does a search, return books most appropriate to their search parameters
 * when the user enters the home page, return books more appropraite to their preferences
 */

// genre: subject:<NAME>
// title: pride+prejudice
// title+author: flowers+inauthor:keyes
