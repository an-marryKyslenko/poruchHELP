import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { user } from '../services/data';

type Status = 'idle' | 'panding' | 'success' | 'reject';

const getStatusComponent = (status: Status, callback: () => void) => {
  switch (status) {
    case 'panding':
      return (
        <Stack spacing={2}>
          <Typography variant="body1">Status: Panding ...</Typography>
          <Typography variant="body1">
            Ваша заявка на роль амбасадора перебуває на розгляді. Ви можете її
            скасувати, якщо передумали.
          </Typography>
          <Button onClick={callback} color="error" variant="contained">
            Cansel Apply
          </Button>
        </Stack>
      );
    case 'success':
      return (
        <Stack spacing={2}>
          <Typography variant="body1">
            Status: You are a confirmed ambassador
          </Typography>
          <Typography variant="body1">
            Your ambassador application is under review. You can cancel your
            application if you change your mind.
          </Typography>
          <Button onClick={callback} color="error" variant="contained">
            Give up the role of ambassador
          </Button>
        </Stack>
      );
    default:
      return (
        <Stack spacing={2}>
          <Typography variant="body1">
            Become part of a community that verifies real stories and helps
            promote them. Ambassadors have access to story verification.
          </Typography>
          <TextField
            multiline
            rows={3}
            label="Why do you want to be Ambassador?"
          />
          <Button variant="contained">Apply</Button>
        </Stack>
      );
  }
};

const ApplyAmbasador = () => {
  const [status, setStatus] = useState<Status>('idle');

  const handeApply = () => {
    setStatus('panding');
  };

  const canselApply = () => {
    setStatus('idle');
  };

  useEffect(() => {
    if (user.role === 'ambassador') {
      setStatus('success');
    }
  }, [status]);

  return (
    <Card variant="outlined" sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
      <CardContent>
        <Typography mb={2} variant="h3">
          {status === 'success' ? 'Ambassador' : 'Apply for Ambassador'}
        </Typography>

        {status === 'panding'
          ? getStatusComponent('panding', canselApply)
          : status === 'success'
            ? getStatusComponent('success', canselApply)
            : getStatusComponent('idle', handeApply)}
      </CardContent>
    </Card>
  );
};

export default ApplyAmbasador;
