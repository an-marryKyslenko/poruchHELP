import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from '@mui/material';

type Props = {
  open: boolean;
  onClose: () => void;
};

export const Donation = ({ open, onClose }: Props) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          p: 4,
          width: '100%',
          maxWidth: 500,
          gap: '10px',
        },
      }}
    >
      <DialogTitle sx={{ p: 0 }}>
        <Typography>Зробіть донат</Typography>
      </DialogTitle>

      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 0 }}
      >
        <TextField
          type="number"
          label="Сума:"
          fullWidth
          InputProps={{
            inputProps: {
              inputMode: 'numeric',
              pattern: '[0-9]*',
            },
            sx: {
              '& input[type=number]::-webkit-outer-spin-button': {
                display: 'none',
              },
              '& input[type=number]::-webkit-inner-spin-button': {
                display: 'none',
              },
              '& input[type=number]': {
                MozAppearance: 'textfield',
              },
            },
          }}
          InputLabelProps={{
            shrink: false,
            sx: {
              visibility: 'visible',
              '&.Mui-focused': {
                visibility: 'hidden',
              },
            },
          }}
        />

        <FormControl>
          <FormLabel>Спосіб оплати:</FormLabel>
          <RadioGroup
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <FormControlLabel value="card" control={<Radio />} label="Картка" />
            <FormControlLabel
              value="googleplay"
              control={<Radio />}
              label="Google Play"
            />
            <FormControlLabel
              value="paypal"
              control={<Radio />}
              label="PayPal"
            />
          </RadioGroup>
        </FormControl>
      </DialogContent>

      <DialogActions sx={{ p: 0, justifyContent: 'space-between' }}>
        <Button
          onClick={onClose}
          color="inherit"
          sx={{ width: '100%', border: '1px solid #e0e0e0' }}
        >
          Скасувати
        </Button>
        <Button
          onClick={onClose}
          variant="contained"
          color="primary"
          sx={{ width: '100%' }}
        >
          Підтвердити
        </Button>
      </DialogActions>
    </Dialog>
  );
};
