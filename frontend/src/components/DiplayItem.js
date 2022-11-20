
export default function DisplayItem({item}){
  return <div className="DisplayItem">
    <img src={item.image} alt={item.alt}/>
  </div>
}