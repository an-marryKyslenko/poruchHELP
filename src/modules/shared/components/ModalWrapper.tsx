import { Box, Modal } from '@mui/material';
import React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', md: 'max-content' },
  bgcolor: 'background.paper',
  border: '1px solid #eee',
  boxShadow: 24,
  borderRadius: '4px',
  p: { xs: 2, sm: 4 },
};

type Props = {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
};
const ModalWrapper: React.FC<Props> = ({ open, handleClose, children }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default ModalWrapper;
