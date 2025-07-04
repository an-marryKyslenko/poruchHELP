import { useFormContext } from 'react-hook-form';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { StoryFormData } from '../../types';
import dayjs from 'dayjs';

const StepReview = () => {
  const { getValues } = useFormContext<StoryFormData>();

  const {
    title,
    shortDescription,
    fullDescription,
    goalAmount,
    endDate,
    isUrgent,
    image,
  } = getValues();
  const imageUrl = image instanceof File ? URL.createObjectURL(image) : '';

  const dateEnd = dayjs(endDate).format('YYYY-MM-DD');

  return (
    <Box sx={{ mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Check before sanding
      </Typography>

      <Card sx={{ mb: 3 }}>
        {imageUrl && (
          <CardMedia
            component="img"
            height="250"
            image={imageUrl}
            alt="History's photo"
          />
        )}
        <CardContent>
          <Typography variant="h6">{title}</Typography>

          {isUrgent && (
            <Chip label="Urgent" color="error" size="small" sx={{ mt: 1 }} />
          )}

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={2}>
            <Grid>
              <Typography variant="subtitle2" gutterBottom>
                Short discription:
              </Typography>
              <Typography variant="body2">{shortDescription}</Typography>
            </Grid>

            <Grid size={12}>
              <Typography variant="subtitle2" gutterBottom>
                Full discription:
              </Typography>
              <Typography variant="body2" whiteSpace="pre-line">
                {fullDescription}
              </Typography>
            </Grid>

            <Grid size={6}>
              <Typography variant="subtitle2">Goal amount:</Typography>
              <Typography variant="body1" fontWeight="bold">
                ₴{goalAmount}
              </Typography>
            </Grid>

            <Grid>
              <Typography variant="subtitle2">End date:</Typography>
              <Typography variant="body1">{dateEnd}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default StepReview;
