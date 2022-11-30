import SearchResult from "./SearchResult";
import "../Master.css"

export default function SearchResults({
  title = '', items = [], hasSearched
}) {
  return <div className='SearchResults'>
    <ul>
      {title && <p>{title}</p>}
      {items.length
        ? <div className='SearchContent'>
          {items.map((item, i) => <SearchResult item={item} key={i} />)}
        </div>
        : <p>{hasSearched
          ? 'We couldn\'t find anything that matches your criteria'
          : ''
        }</p>
      }
    </ul>
  </div>

}