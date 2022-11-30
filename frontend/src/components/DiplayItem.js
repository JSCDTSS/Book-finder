
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function DisplayItem({ item }) {
  const [open, setOpen] = useState(false)

  function handleClose() {
    setOpen(false)
  }

  function handleOpen() {
    setOpen(true)
  }

  return <div className="DisplayItem">
    <img src={item?.imageLinks?.smallThumbnail} alt={item.alt} onClick={handleOpen} />

    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box className='ModalBox'>
        <button className='ModalClose' onClick={handleClose}>Close</button>
        <h4>{item.title}</h4>
        {item.canonicalVolumeLink &&
          <p><a href={item.canonicalVolumeLink}>
            Find this book on Google Books
          </a></p>
        }
        <p>{item.description}</p>
      </Box>
    </Modal>
  </div>
}

