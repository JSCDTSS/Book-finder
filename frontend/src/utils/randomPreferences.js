
const genreList = [
  'romance', 'educational', 'sci-fi', 'fantasy', 'horror',
  'manga', 'historical', 'spirituality', 'crime', 'travel'
]

export default function randomPreference() {
  const randomInt = Math.floor(Math.random() * genreList.length)
  return {
    genres: [genreList[randomInt]],
    authors: [],
    pagesLowerBound: '0',
    pagesUpperBound: '0',
    types: []
  }
}