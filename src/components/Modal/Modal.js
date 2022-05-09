import * as React from 'react';
import {Modal, Box} from '@mui/material';
import './Modal.scss';

export default function BasicModal({text, handleClose}) {

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

  return (
    <div className='modal-wrapper'>
      <Modal
        open={true}
        onClose={handleClose}
      >
        <Box sx={style}>
          <h3>{text}</h3>
        </Box>
      
      </Modal>
    </div>
  );
}