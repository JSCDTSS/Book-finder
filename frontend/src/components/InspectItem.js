
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export default function InspectItem({ open, handleClose, item }) {

  return <Modal
    open={open}
    onClose={handleClose}
  >
    <Box className='ModalBox'>
      <button
        className='ModalClose' onClick={handleClose}>
        Close
      </button>
      <h4>{item.title}</h4>
      {item.canonicalVolumeLink && <p>
        <a href={item.canonicalVolumeLink}>
          Find this book on Google Books
        </a>
      </p>}
      <p>{item.description}</p>
    </Box>
  </Modal>
}