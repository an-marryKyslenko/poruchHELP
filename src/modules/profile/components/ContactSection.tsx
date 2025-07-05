import {
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import FieldRow from './FieldRow';
import { user } from '../services/data';

type Props = {
  handleOpen: () => void;
};

const ContactSection = ({ handleOpen }: Props) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">Contacts</Typography>
          <IconButton onClick={handleOpen}>
            <EditIcon />
          </IconButton>
        </Stack>
        <FieldRow label="Email" value={user?.email} />
        <FieldRow label="Phone" value={user.phone} />
        <FieldRow label="Adress" value={user.adress || '---'} />
      </CardContent>
    </Card>
  );
};

export default ContactSection;
