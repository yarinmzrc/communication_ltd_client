import * as React from 'react';
import {Modal, Box} from '@mui/material';
import './Modal.scss';
import { useNavigate } from 'react-router-dom';

export default function BasicModal({text, handleClose}) {
  const navigate = useNavigate();

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

  const btnStyle = {
        all: 'unset',
        cursor: 'pointer',
        padding: '.5rem .8rem',
        margin: '1rem',
        backgroundColor: 'transparent',
        border: '2px solid #626262',
        fontWeight: '500',
        fontSize:' 1.2rem'
  }

  return (
    <div className='modal-wrapper'>
      <Modal
        open={true}
        onClose={handleClose}
      >
        <Box sx={style}>
          <h3>{text}</h3>
          {text === "User Created" ? <button sx={btnStyle} onClick={() => navigate('/')}>Go To Login Page</button> : ''}
        </Box>
      
      </Modal>
    </div>
  );
}