import SearchResult from "./SearchResult";

export default function SearchResults({items=[]}){
  return <div className='SearchResults'>
    {items.map(item => <SearchResult item={item}/>)}
  </div>
}