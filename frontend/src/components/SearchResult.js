
export default function SearchResult({ item }) {
  function displayItemInfo() {
    //todo
    console.log(item.info)
  }


  return <li>
    <div className='SearchResult'>
      <p onClick={displayItemInfo}>{item.title}</p>
    </div>
  </li>
}