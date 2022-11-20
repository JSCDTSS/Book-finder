
export default function SearchResult(item){
  function displayItemInfo(){
    //todo
    console.log(item.info)
  }

  return <div className='SearchResult'>
    <p onClick={displayItemInfo}>{item.name}</p>
  </div>
}