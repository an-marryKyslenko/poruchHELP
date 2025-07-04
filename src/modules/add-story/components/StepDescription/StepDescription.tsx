import { StoryFormData } from '../../types';
import { Checkbox, FormControlLabel, Stack, TextField } from '@mui/material';
import { useEffect, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const StepDescription = ({ activeStep }: { activeStep: number }) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<StoryFormData>();
  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (activeStep === 1 && refInput.current) {
      refInput.current.focus();
    }
  }, [activeStep]);

  return (
    <Stack spacing={3}>
      <TextField
        label="Full discription"
        {...register('fullDescription')}
        multiline
        rows={4}
        error={!!errors.fullDescription}
        helperText={errors.fullDescription?.message}
        inputRef={refInput}
      />
      <FormControlLabel
        control={
          <Controller
            name="isUrgent"
            control={control}
            render={({ field }) => <Checkbox {...field} />}
          />
        }
        label="Mark as urgent"
      />
    </Stack>
  );
};

export default StepDescription;
