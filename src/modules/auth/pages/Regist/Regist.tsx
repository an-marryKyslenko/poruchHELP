import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { AuthContainer } from '../../components/AuthContainer/AuthContainer';
import { Card } from '../../components/Card/Card';
import { GoogleIcon } from '../../components/GoogleIcon/GoogleIcon';
import FieldInput from '../../components/FieldInput/FieldInput';
import { useMutation } from '@tanstack/react-query';
import { authAPI } from '../../services/auth';

const Regist = () => {
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const mutation = useMutation({
    mutationFn: authAPI.regist,
    onSuccess: () => {},
  });

  const validateInputs = (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    repeatPassword: string,
  ) => {
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

    if (password !== repeatPassword) {
      setPasswordErrorMessage('Password must match with repeat password');
      isValid = false;
    } else {
      setPasswordErrorMessage('');
    }

    if (!firstName || firstName.length < 1) {
      setNameErrorMessage('First name is required.');
      isValid = false;
    } else {
      setNameErrorMessage('');
    }

    if (!lastName || lastName.length < 1) {
      setNameErrorMessage('Last name is required.');
      isValid = false;
    } else {
      setNameErrorMessage('');
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const password = formData.get('password') as string;
    const repeatPassword = formData.get('repeatPassword') as string;
    const email = formData.get('email') as string;

    if (!validateInputs(firstName, lastName, email, password, repeatPassword)) {
      return;
    }

    mutation.mutate({
      email,
      firstName,
      lastName,
      repeatPassword,
      password,
    });

    // form.reset();
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
          Sign up
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <FieldInput
              error={nameErrorMessage}
              fieldName="firstName"
              label="Your first Name"
              pHolder="Jone"
            />
            <FieldInput
              error={nameErrorMessage}
              fieldName="lastName"
              label="Your last name"
              pHolder="Snow"
            />
          </Stack>

          <FieldInput
            error={emailErrorMessage}
            fieldName="email"
            label="Email"
            pHolder="your@email.com"
          />

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <FieldInput
              error={passwordErrorMessage}
              fieldName="password"
              label="Password"
              pHolder="••••••"
              type="password"
            />
            <FieldInput
              error={passwordErrorMessage}
              fieldName="repeatPassword"
              label="Repeat Password"
              pHolder="••••••"
              type="password"
            />
          </Stack>

          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive updates via email."
          />
          <Button type="submit" fullWidth variant="contained">
            Sign up
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
            Sign up with Google
          </Button>
        </Box>
      </Card>
    </AuthContainer>
  );
};

export default Regist;
