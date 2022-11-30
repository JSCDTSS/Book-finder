
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
          <p>
            <a href={item.canonicalVolumeLink}>Find this book on Google Books</a>
          </p>
        }
        <p>{item.description}</p>
      </Box>
    </Modal>
  </div>
}

