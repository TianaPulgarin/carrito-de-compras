import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

const MyComponent = ({ open, onClose, cartItems }) => {

  return (
    <Modal
      open={open} // Se controla el estado abierto/cerrado con la prop 'open'
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Carrito
        </Typography>
        {cartItems.map(item => (
          <Typography key={item.id} sx={{ mt: 2 }}>
            {item.title} - Cantidad: {item.quantity}
          </Typography>
        ))}
      </Box>
    </Modal>
  );
}

export default MyComponent;
