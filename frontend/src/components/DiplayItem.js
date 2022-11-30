
import { useState } from 'react';
import InspectItem from './InspectItem';

export default function DisplayItem({ item }) {
  const [open, setOpen] = useState(false)

  function handleClose() {
    setOpen(false)
  }

  function handleOpen() {
    setOpen(true)
  }

  return <div className="DisplayItem">
    <img
      src={item?.imageLinks?.smallThumbnail}
      alt={item.alt}
      onClick={handleOpen}
    />

    <InspectItem
      open={open}
      handleClose={handleClose}
      item={item}
    />
  </div>
}

