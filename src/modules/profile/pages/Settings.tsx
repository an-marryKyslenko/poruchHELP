import { Button, ButtonGroup, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import ModalWrapper from '../../shared/components/ModalWrapper';
import ChangeEmail from '../components/ChangeEmail';
import ChangePassword from '../components/ChangePassword';
import DeleteAccount from '../components/DeleteAccount';
import ApplyAmbasador from '../components/ApplyAmbasador';
import { user } from '../services/data';

const Settings = () => {
  const [openDeleteModal, setOpenDeleteModel] = useState(false);

  const handleOpen = () => {
    setOpenDeleteModel(true);
  };

  const handleClose = () => {
    setOpenDeleteModel(false);
  };

  const removeAccount = () => {
    setOpenDeleteModel(false);
  };

  return (
    <Stack spacing={2} mb={4} mt={2}>
      <Typography variant="h2">Settings</Typography>

      <ChangeEmail />
      <ChangePassword />

      {user.role !== 'admin' && <ApplyAmbasador />}
      <DeleteAccount openModal={handleOpen} />

      <ModalWrapper open={openDeleteModal} handleClose={handleClose}>
        <Typography variant="h5" mb={2}>
          Are you sure you want to delete your account?
        </Typography>
        <ButtonGroup fullWidth orientation="vertical">
          <Button variant="contained" color="error" onClick={removeAccount}>
            Yes, delete
          </Button>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cansel
          </Button>
        </ButtonGroup>
      </ModalWrapper>
    </Stack>
  );
};

export default Settings;
