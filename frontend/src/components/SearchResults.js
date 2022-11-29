import SearchResult from "./SearchResult";
import "../Master.css"

export default function SearchResults({title='',items=[]}){
  return <div className='SearchResults'>
    <ul>
    {title && <p>{title}</p>}
    <div className='SearchContent'>
      {items.map((item,i) => <SearchResult item={item} key={i}/>)}
    </div>
    </ul>
  </div>

}