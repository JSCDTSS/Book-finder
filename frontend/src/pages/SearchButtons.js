
export default function SearchButtons({ type, setType }) {
  function log(e) {
    setType(e.target.id)
  }

  return <>
    <button
      id='genres'
      onClick={log}
      className={type === 'genres' ? 'selected' : 'notSelected'}
    >
      Genre
    </button>
    <button
      id='authors'
      onClick={log}
      className={type === 'authors' ? 'selected' : 'notSelected'}
    >
      Author
    </button>
    <button
      id='titles'
      onClick={log}
      className={type === 'titles' ? 'selected' : 'notSelected'}
    >
      Title
    </button>
  </>
}