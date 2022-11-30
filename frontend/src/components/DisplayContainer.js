
import DisplayItem from './DiplayItem';

export default function DisplayContainer({ items = [] }) {
  return <div className='DisplayContainer'>
    <div className='Content'>
      {items.map((item, i) => <DisplayItem item={item} key={i} />)}
    </div>
  </div>

}