import SearchResult from "./SearchResult";
import "../Master.css"

export default function SearchResults({ items = [] }) {
  return <div className='SearchResults'>
    <ul>
      {items.map((item, i) => <SearchResult key={i} item={item} />)}
    </ul>
  </div>
}