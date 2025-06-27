import { FormControl, FormLabel, TextField } from '@mui/material';
import React from 'react';

type Props = {
  error: string;
  fieldName: string;
  label: string;
  pHolder: string;
};
const FieldInput = ({ error, fieldName, label, pHolder }: Props) => {
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
        color={error ? 'error' : 'primary'}
      />
    </FormControl>
  );
};

export default FieldInput;
