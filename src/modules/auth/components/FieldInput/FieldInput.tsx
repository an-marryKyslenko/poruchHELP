import { FormControl, FormLabel, TextField } from '@mui/material';
import React from 'react';

type Props = {
  error: string;
  fieldName: string;
  label: string;
  pHolder: string;
  type?: 'text' | 'password';
};
const FieldInput = ({
  error,
  fieldName,
  label,
  pHolder,
  type = 'text',
}: Props) => {
  return (
    <FormControl>
      <FormLabel htmlFor={fieldName}>{label}</FormLabel>
      <TextField
        autoComplete={fieldName}
        name={fieldName}
        required
        fullWidth
        id={fieldName}
        placeholder={pHolder}
        error={!!error}
        helperText={error}
        type={type}
        color={error ? 'error' : 'primary'}
      />
    </FormControl>
  );
};

export default FieldInput;
