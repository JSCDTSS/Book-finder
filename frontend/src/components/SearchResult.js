
import { useState } from 'react';
import '../Master.css';
import InspectItem from './InspectItem';

export default function SearchResult({ item }) {
  const [open, setOpen] = useState(false)

  function handleClose() {
    setOpen(false)
  }

  function handleOpen() {
    setOpen(true)
  }
  
  return <li>
    <div className="SearchResult">
      <div className='ListItem' onClick={handleOpen} >
        <div className='Text'>
          <p className='Title'><b>{item.title}</b></p>
          {item.authors && item.authors.map((author,i) =>
            <p key={i} className='Author'>{author}</p>
          )}
        </div>
        <img src={item?.imageLinks?.smallThumbnail} alt={item.alt} />
      </div>

      <InspectItem
        open={open}
        handleClose={handleClose}
        item={item}
      />
    </div>
  </li>
}