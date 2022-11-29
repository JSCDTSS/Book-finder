

import axios from 'axios'

const booksApi = axios.create({
  baseURL: 'https://www.googleapis.com',
  method: 'get',
  timeout: 2000
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
  console.log(params)
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

function echo(arg) {
  console.log(arg)
  return arg
}

async function getBooksByPreference(preferences) {
  let [byAuthors, byGenres, byTitles] = [[], [], []]
  if (preferences?.authors?.length) {
    byAuthors = await getBooksByCategory('inauthor', preferences.authors)
  }
  if (preferences?.genres?.length) {
    byGenres = await getBooksByCategory('subject', preferences.genres)
  }
  if (preferences?.titles?.length) {
    byTitles = await getBooksByCategory('intitle', preferences.titles)
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
      q: `${fieldType}:${category}`,
      maxResults: 40
    })
  }))
}

export default getBooksByPreference
