import { Stack, Typography } from '@mui/material';
import { useState } from 'react';

import PrivatSection from '../components/PrivatSection';
import ContactSection from '../components/ContactSection';
import EditorDrawer from '../components/EditorDrawer';

const Profile = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenEditDrawer = () => {
    setOpenDrawer(true);
  };

  return (
    <Stack spacing={2} mb={4}>
      <Typography variant="h2">Profile</Typography>

      <PrivatSection handleOpen={handleOpenEditDrawer} />
      <ContactSection handleOpen={handleOpenEditDrawer} />

      <EditorDrawer
        openDrawer={openDrawer}
        closeDrawer={() => setOpenDrawer(false)}
      />
    </Stack>
  );
};

export default Profile;
