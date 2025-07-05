import EditIcon from '@mui/icons-material/Edit';
import RoleBadge from '../components/RoleBadge';
import {
  Avatar,
  Badge,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import FieldRow from '../components/FieldRow';
import { user } from '../services/data';

type Props = {
  handleOpen: () => void;
};

const PrivatSection = ({ handleOpen }: Props) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">Private info</Typography>
          <IconButton onClick={handleOpen}>
            <EditIcon />
          </IconButton>
        </Stack>

        <Stack spacing={2} mt={2}>
          <Badge
            sx={{
              width: 80,
            }}
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={<RoleBadge role={user.role} />}
          >
            <Avatar
              alt="Anna"
              src={user.avatarUrl}
              sx={{
                width: 80,
                height: 80,
                border: '2px solid',
                borderColor:
                  user.role === 'admin'
                    ? '#f44336'
                    : user.role === 'ambassador'
                      ? '#4caf50'
                      : '#fff',
              }}
            />
          </Badge>

          <FieldRow
            label="Full name"
            value={`${user.firstName} ${user.lastName}`}
          />
          <FieldRow label="Bio" value="Your bio" />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PrivatSection;
