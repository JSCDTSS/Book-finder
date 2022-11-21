
import DisplayItem from './DiplayItem';
import tempImage from "../Images/Fantasy.png"

const tempItem = {
  image: tempImage,
  alt: 'temp dragon'
}

export default function DisplayContainer({title='',items=[tempItem,tempItem,tempItem]}){
  return <div className='DisplayContainer'>
    {title && <p>{title}</p>}
    <div className='Content'>
      {items.map((item,i) => <DisplayItem item={item} key={i}/>)}
    </div>
  </div>

}