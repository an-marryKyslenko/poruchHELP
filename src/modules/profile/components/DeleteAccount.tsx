import { Button, Card, CardContent, Stack, Typography } from '@mui/material';

const DeleteAccount = ({ openModal }: { openModal: () => void }) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
      <CardContent>
        <Typography mb={2} variant="h3">
          Delete account
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <Button
            variant="contained"
            fullWidth
            color="error"
            onClick={openModal}
          >
            Delete account
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DeleteAccount;
