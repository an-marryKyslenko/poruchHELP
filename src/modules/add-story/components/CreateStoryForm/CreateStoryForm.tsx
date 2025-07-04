import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { storySchema } from '../../validation/storySchema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Alert,
  Box,
  Button,
  Stack,
  Step,
  StepLabel,
  Stepper,
  useMediaQuery,
} from '@mui/material';
import StepBasicInfo from '../StepBasicInfo/StepBasicInfo';
import StepDescription from '../StepDescription/StepDescription';
import StepDetails from '../StepDetails/StepDetails';
import StepReview from '../StepReview/StepReview';
import { StoryFormData } from '../../types';

const steps = ['Main info', 'Description', 'Details', 'Confirmation'];

const CreateStoryForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const isMobile = useMediaQuery('(max-width: 600px)');
  const methods = useForm<StoryFormData>({
    resolver: zodResolver(storySchema),
    defaultValues: {
      title: '',
      shortDescription: '',
      fullDescription: '',
      goalAmount: 0,
      endDate: '',
      isUrgent: false,
    },
    mode: 'onChange',
  });

  const onNext = () => setActiveStep(prev => prev + 1);
  const onBack = () => setActiveStep(prev => prev - 1);

  const onSubmit = () => {};

  return (
    <FormProvider {...methods}>
      <Box
        sx={{
          marginBlock: { xs: 2 },
        }}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{!isMobile && label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Stack spacing={3}>
          {activeStep === 0 && <StepBasicInfo activeStep={activeStep} />}
          {activeStep === 1 && <StepDescription activeStep={activeStep} />}
          {activeStep === 2 && <StepDetails activeStep={activeStep} />}
          {activeStep === 3 && <StepReview />}

          <Stack direction="row" spacing={2}>
            {activeStep > 0 && (
              <Button variant="outlined" onClick={onBack}>
                Back
              </Button>
            )}

            {activeStep < steps.length - 1 ? (
              <Button
                variant="contained"
                onClick={onNext}
                disabled={Object.keys(methods.formState.errors).length > 0}
              >
                Next
              </Button>
            ) : (
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={!methods.formState.isValid}
                >
                  Send
                </Button>

                {!methods.formState.isValid && activeStep === 3 && (
                  <Alert severity="warning">
                    Not all fields were filled in
                  </Alert>
                )}
              </Stack>
            )}
          </Stack>
        </Stack>
      </Box>
    </FormProvider>
  );
};

export default CreateStoryForm;
