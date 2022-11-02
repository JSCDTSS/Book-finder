

const axios = require('axios')
const fs = require('fs')

const booksApi = axios.create({
  baseURL: 'https://www.googleapis.com',
  method: 'get',
  timeout: 1000
})

/* 
    a pipe is a function that is composed of other functions,
    eg. suppose we have a variable v, and functions f,g and h

    const newPipe = createPipe(f,g,h)

    if we called newPipe(v), we would essentially do the following
    return f(g(h(v)))
    so we call f on v, then g on the result, then on the next result
*/
function createPipeAsync(...functions) {
  return function (initialValue) {
    return functions.reduce(
      (input, _function) => input.then(_function),
      Promise.resolve(initialValue)
    )
  }
}

function logInfo(res) {
  console.log(`total items: ${res.data.totalItems}`)
  res.data.items.forEach(item => {
    console.log(item)
  })
}

function parseNames(res) {
  return res.data.items.map(item => 
    item.volumeInfo.title
  )
}

// function saveResponseData(res) {
//   fs.writeFile(
//     './exampleData.json',
//     JSON.stringify(res.data),
//     function (err) {
//       if (err) return console.log(err);
//       console.log('Hello World');
//     });
// }

function writeToFile(path,data){
  fs.writeFile(
    `./${path}`,
    JSON.stringify(data),
    function (err) {
      if (err) return console.log(err);
      console.log('successful');
    });
}

////////////////////////

function searchVolumes(params) {
  return booksApi.request({
    url: '/books/v1/volumes',
    params,
  })
}

function parseBasicInfo(res){
  return res.data.items.map(item => ({
    title: item.volumeInfo.title,
    subtitle: item.volumeInfo.subtitle,
    authors: item.volumeInfo.authors,
    imageLinks: item.volumeInfo.imageLinks,
    industryIdentifiers: item.volumeInfo.industryIdentifiers,
    averageRating: item.volumeInfo.averageRating,
    ratingsCount: item.volumeInfo.ratingsCount,
    pageCount: item.volumeInfo.pageCount
  }))
}

const getBookInfo = createPipeAsync(
  searchVolumes, parseBasicInfo
)

async function getBooksByPreference(preferences){
  const byAuthors = await getBooksByCategory('inauthor',preferences.authors)
  const byGenres = await getBooksByCategory('subject',preferences.genres)
  const byTypes = await getBooksByCategory('subject',preferences.types)
  console.log([
    byAuthors,
    byGenres,
    byTypes
  ].flat(2))
}

function getBooksByCategory(fieldType,preferenceCategories){
  return Promise.all(preferenceCategories.map(category => {
    return getBookInfo({
      q: `${fieldType}:${category}`
    })
  }))
}

const testPreferences = {
  authors: ['Brittany Nightshade'],
  genres: ['Fantasy'],
  types: ['Fiction']
}

getBooksByPreference(testPreferences)

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
