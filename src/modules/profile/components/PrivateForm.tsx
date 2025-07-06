import {
  Badge,
  Button,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { user } from '../services/data';
import StyledAvatar from './StyledAvatar';

const PrivateForm = () => {
  return (
    <Stack component="form" spacing={2}>
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
            sx={theme => ({
              color: '#fff',
              backgroundColor: theme.palette.primary.main,
              borderRadius: '50%',
            })}
          >
            {user.avatarUrl ? (
              <EditIcon fontSize="small" />
            ) : (
              <AddIcon fontSize="small" />
            )}
          </IconButton>
        }
      >
        <StyledAvatar src="{user.avatarUrl}" />
      </Badge>
      <TextField label="First Name" />
      <TextField label="Last Name" />

      <TextField label="Bio" multiline rows={4} />
      <Button fullWidth variant="contained">
        Change
      </Button>
    </Stack>
  );
};

export default PrivateForm;
