import { Box, Button, Stack, Typography } from '@mui/material';
import CreateStoryForm from '../components/CreateStoryForm/CreateStoryForm';
import { useAuth } from '../../shared/context/AuthContext';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ModalWrapper from '../../shared/components/ModalWrapper';

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
        <ModalWrapper open={openModal} handleClose={handleClose}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            You are not logged in. Please select a suitable login option.
          </Typography>
          <Stack spacing={2}>
            <Button to="./login" fullWidth component={Link} variant="contained">
              Log in
            </Button>
            <Button to="./signup" component={Link} variant="contained">
              Sign up
            </Button>
          </Stack>
        </ModalWrapper>
      )}
    </Box>
  );
};

export default AddStory;
