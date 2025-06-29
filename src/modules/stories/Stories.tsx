import React, { useState, useEffect } from 'react';
import {
  Box,
  Skeleton,
  Select,
  MenuItem,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  Typography,
  LinearProgress,
  Button,
} from '@mui/material';

const Stories = () => {
  const [loading, setLoading] = useState(true);
  const [collected, setCollected] = useState(350);
  const target = 5000;

  const progress = (collected / target) * 100;

  const handleDonate = () => {
    const donationAmount = 100;

    setCollected(prev => prev + donationAmount);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      {loading ? (
        <Box boxShadow={3} borderRadius={2} p={2} width="fit-content">
          <Skeleton variant="rectangular" width={200} height={218} />
        </Box>
      ) : (
        <Box
          boxShadow={3}
          borderRadius={2}
          p={2}
          width="fit-content"
          display="flex"
          flexDirection="column"
        >
          <Select defaultValue="" displayEmpty sx={{ mb: 2, width: 200 }}>
            <MenuItem value="">Category</MenuItem>
            <MenuItem value="cat1">Category 1</MenuItem>
            <MenuItem value="cat2">Category 2</MenuItem>
          </Select>

          <Select defaultValue="" displayEmpty sx={{ mb: 2, width: 200 }}>
            <MenuItem value="">Region</MenuItem>
            <MenuItem value="cat1">Region 1</MenuItem>
            <MenuItem value="cat2">Region 2</MenuItem>
          </Select>

          <FormControl>
            <FormLabel>Urgency</FormLabel>
            <RadioGroup defaultValue="option1">
              <FormControlLabel
                value="option1"
                control={<Radio />}
                label="Any"
              />
              <FormControlLabel
                value="option2"
                control={<Radio />}
                label="High"
              />
              <FormControlLabel
                value="option3"
                control={<Radio />}
                label="Medium"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      )}

      <Box
        boxShadow={3}
        borderRadius={2}
        p={2}
        width={300}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          component="img"
          src="/path/to/photo.jpg"
          alt="My mother"
          sx={{ width: '100%', borderRadius: 2, mb: 2 }}
        />
        <div>
          <Typography variant="h5" component="h1" gutterBottom>
            Medical Expenses for My Mother
          </Typography>
          <Typography variant="body1" component="p">
            My mother is need of urgent surgery. We are unable to cover the
            costs on our own.Any help would be greatly appreciated.
          </Typography>
        </div>

        <Typography variant="body2" gutterBottom>
          ${collected} raised of ${target}
        </Typography>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10,
            borderRadius: 5,
            mb: 2,
            width: '100%',
            backgroundColor: '#a0c4fd',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#1976d2',
            },
          }}
        />

        <Button variant="contained" fullWidth onClick={handleDonate}>
          Donate
        </Button>
      </Box>
    </Box>
  );
};

export default Stories;
