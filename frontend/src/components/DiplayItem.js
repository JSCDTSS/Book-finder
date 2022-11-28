
export default function DisplayItem({item}){
  return <div className="DisplayItem">
    <li>
    <img src={item.image} alt={item.alt}/>
    </li>
  </div>
}