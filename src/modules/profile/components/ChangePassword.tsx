import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

const ChangePassword = () => {
  return (
    <Card variant="outlined" sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
      <CardContent>
        <Typography mb={2} variant="h3">
          Change password
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <TextField
            name="password"
            type="password"
            fullWidth
            label="Password"
          />
          <TextField
            name="repeadPassword"
            type="password"
            fullWidth
            label="Repead password"
          />
          <Button variant="contained" sx={{ pr: 1, pl: 1 }}>
            Change
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ChangePassword;
