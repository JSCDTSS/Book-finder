
import DisplayItem from './DiplayItem';

export default function DisplayContainer({title='',items=[]}){
  return <div className='DisplayContainer'>
    <ul>
    {title && <p>{title}</p>}
    <div className='Content'>
      {items.map((item,i) => <DisplayItem item={item} key={i}/>)}
    </div>
    </ul>
  </div>

}