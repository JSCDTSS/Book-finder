import SearchResult from "./SearchResult";

export default function SearchResults({items=[]}){
  return <div className='SearchResults'>
    {items.map((item,i) => <SearchResult key={i} item={item}/>)}
  </div>
}