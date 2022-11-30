import searchBooks from './googleRequest'

function removeWhiteSpace(array) {
  if (!array) return []
  return array.map(e => e.replace(/ /g, ''))
}

function getBookWeight(book, preferences) {
  const doesBookMatchAuthor = removeWhiteSpace(book.authors)
    .some(author =>
      removeWhiteSpace(preferences.authors).includes(author)
    )
  const doesBookMatchPageBounds =
    preferences.pagesLowerBound <= book.pageCount &&
    book.pageCount <= preferences.pagesUpperBound
  return doesBookMatchAuthor * 3 + doesBookMatchPageBounds
}

export default async function getBooksByPreferences(preferences) {
  const books = await searchBooks(preferences)
  const booksByWeight = books.map(book => ({
    ...book, weight: getBookWeight(book, preferences)
  }))
  return booksByWeight.sort((a,b) => b.weight - a.weight)
}