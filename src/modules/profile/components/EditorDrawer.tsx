import {
  Avatar,
  Badge,
  Box,
  Drawer,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

type Props = {
  openDrawer: boolean;
  closeDrawer: () => void;
};

const EditorDrawer = ({ openDrawer, closeDrawer }: Props) => {
  return (
    <Drawer anchor="right" open={openDrawer} onClose={closeDrawer}>
      <Box
        component="form"
        sx={{
          p: 2,
        }}
      >
        <Stack spacing={2}>
          <Badge
            overlap="circular"
            sx={{
              width: 80,
            }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <IconButton
                size="small"
                color="primary"
                sx={{
                  color: '#fff',
                  backgroundColor: '#4caf50',
                  borderRadius: '50%',
                }}
              >
                <EditIcon fontSize="small" />
              </IconButton>
            }
          >
            <Avatar
              src="{user.avatarUrl}"
              sx={{ width: 80, height: 80, border: '2px solid #4caf50' }}
            />
          </Badge>
          <TextField label="First Name" />
          <TextField label="Last Name" />

          <TextField label="Bio" multiline rows={4} />
        </Stack>
      </Box>
    </Drawer>
  );
};

export default EditorDrawer;
