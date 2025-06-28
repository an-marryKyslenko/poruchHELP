import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AuthContainer } from '../../components/AuthContainer/AuthContainer';
import { Card } from '../../components/Card/Card';
import { GoogleIcon } from '../../components/GoogleIcon/GoogleIcon';
import FieldInput from '../../components/FieldInput/FieldInput';

const Login = () => {
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const validateInputs = (email: string, password: string) => {
    let isValid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailErrorMessage('');
    }

    if (!password || password.length < 6) {
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const password = formData.get('password') as string;
    const email = formData.get('email') as string;

    if (!validateInputs(email, password)) {
      return;
    }

    form.reset();
  };

  return (
    <AuthContainer
      direction="column"
      justifyContent="space-between"
      p={2}
      sx={{
        flexGrow: 1,
      }}
    >
      <Card variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
        >
          Log in
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <FieldInput
            error={emailErrorMessage}
            fieldName="email"
            label="Email"
            pHolder="john@example.com"
          />

          <FieldInput
            error={passwordErrorMessage}
            fieldName="password"
            label="Password"
            pHolder="••••••"
          />

          <Button type="submit" fullWidth variant="contained">
            Log in
          </Button>
        </Box>

        <Divider>
          <Typography sx={{ color: 'text.secondary' }}>or</Typography>
        </Divider>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => {}}
            startIcon={<GoogleIcon />}
          >
            Log in with Google
          </Button>
        </Box>
      </Card>
    </AuthContainer>
  );
};

export default Login;
