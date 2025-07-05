import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import CreateStoryForm from '../components/CreateStoryForm/CreateStoryForm';
import { useAuth } from '../../shared/context/AuthContext';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #eee',
  boxShadow: 24,
  borderRadius: '4px',
  p: 4,
};

const AddStory = () => {
  const [openModal, setOpenModal] = useState(false);
  const { isAuth } = useAuth();
  const navegate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      setOpenModal(true);
    }
  }, [isAuth]);

  const handleClose = () => {
    setOpenModal(false);
    navegate('/');
  };

  return (
    <Box
      sx={{
        paddingBlock: { xs: 2, md: 4 },
      }}
    >
      <Typography
        component="h2"
        variant="h3"
        sx={{ fontSize: { xs: '20px', md: '30px' } }}
      >
        Add new story
      </Typography>

      <CreateStoryForm />

      {!isAuth && (
        <Modal open={openModal} onClose={handleClose}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              You are not logged in. Please select a suitable login option.
            </Typography>
            <Stack spacing={2}>
              <Button to="./login" fullWidth component={Link} variant="contained">
                Log in
              </Button>
              <Button to="./logup" component={Link} variant="contained">
                Log up
              </Button>
            </Stack>
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default AddStory;
