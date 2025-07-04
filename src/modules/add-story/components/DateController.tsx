import { Controller, useFormContext } from 'react-hook-form';
import { StoryFormData } from '../types';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const DateController = () => {
  const { control } = useFormContext<StoryFormData>();
  const Today = dayjs();
  const MaxDate = Today.add(2, 'year');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name="endDate"
        control={control}
        render={({ field, fieldState }) => {
          return (
            <DesktopDatePicker
              label="End date"
              value={field.value ? dayjs(field.value) : null}
              onChange={newValue => {
                if (newValue && newValue.isValid()) {
                  field.onChange(newValue.toISOString());
                } else {
                  field.onChange('');
                }
              }}
              minDate={Today}
              maxDate={MaxDate}
              sx={{
                width: { md: '50%' },
              }}
              slotProps={{
                textField: {
                  // fullWidth: true,
                  error: !!fieldState.error,
                  helperText: fieldState.error?.message,
                  inputProps: {
                    readOnly: true,
                  },
                },
              }}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default DateController;
