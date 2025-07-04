import { Dialog } from '@mui/material';
import React from 'react';

const ModalWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog open fullWidth maxWidth="md">
      {children}
    </Dialog>
  );
};

export default ModalWrapper;
