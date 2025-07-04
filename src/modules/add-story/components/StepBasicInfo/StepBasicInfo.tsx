import { Stack, TextField } from '@mui/material';
import { StoryFormData } from '../../types';
import { useFormContext } from 'react-hook-form';
import { useEffect, useRef } from 'react';

const StepBasicInfo = ({ activeStep }: { activeStep: number }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<StoryFormData>();
  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (activeStep === 0 && refInput.current) {
      refInput.current.focus();
    }
  }, [activeStep]);

  return (
    <Stack spacing={3}>
      <TextField
        label="Title"
        {...register('title')}
        error={!!errors.title}
        helperText={errors.title?.message}
        inputRef={refInput}
      />
      <TextField
        label="Short Description"
        {...register('shortDescription')}
        multiline
        rows={2}
        error={!!errors.shortDescription}
        helperText={errors.shortDescription?.message}
      />
    </Stack>
  );
};

export default StepBasicInfo;
