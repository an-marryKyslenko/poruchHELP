import { Box, Typography } from '@mui/material';

const FieldRow = ({ label, value }: { label: string; value?: string }) => (
  <Box>
    <Typography variant="caption" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="body1">{value}</Typography>
  </Box>
);

export default FieldRow;
