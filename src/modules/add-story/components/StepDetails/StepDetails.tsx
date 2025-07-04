import { StoryFormData } from '../../types';
import { TextField } from '@mui/material';
import FileUploadField from '../FileUploadField/FileUploadField';
import { useFormContext } from 'react-hook-form';
import DataController from '../DateController';
import { useEffect, useRef } from 'react';

const StepDetails = ({ activeStep }: { activeStep: number }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<StoryFormData>();
  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (activeStep === 2 && refInput.current) {
      refInput.current.focus();
    }
  }, [activeStep]);

  return (
    <>
      <TextField
        label="GoalAmount"
        sx={{
          width: { md: '50%' },
        }}
        inputRef={refInput}
        {...register('goalAmount', { valueAsNumber: true })}
        error={!!errors.goalAmount}
        helperText={errors.goalAmount?.message}
      />
      <DataController />
      <FileUploadField />
    </>
  );
};

export default StepDetails;
