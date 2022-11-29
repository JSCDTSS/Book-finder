
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

export default function SearchResult({ item }) {
  const [open, setOpen] = useState(false)

  function displayItemInfo() {
    //todo
    console.log(item.description)
  }

  function handleClose() {
    setOpen(false)
  }

  function handleOpen() {
    setOpen(true)
  }

  return <li>
    <div className="SearchResult">
      <p onClick={displayItemInfo}>{item.title}</p>
      <img src={item?.imageLinks?.smallThumbnail} alt={item.alt} onClick={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button onClick={handleClose}>Close</button>
          <img src={item?.imageLinks?.thumbnail} alt={item.alt} />
        </Box>
      </Modal>
    </div>
  </li>
}