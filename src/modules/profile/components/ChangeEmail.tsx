import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { user } from '../services/data';

const ChangeEmail = () => {
  const [email, setEmail] = useState(user.email);

  const handgeEmail = () => {};

  return (
    <Card variant="outlined" sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
      <CardContent>
        <Typography variant="h3" mb={2}>
          Change email
        </Typography>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <TextField
            name="email"
            fullWidth
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{ pr: 1, pl: 1 }}
            onClick={handgeEmail}
          >
            Change
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ChangeEmail;
