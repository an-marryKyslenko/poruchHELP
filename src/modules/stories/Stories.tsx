import { useState, useEffect } from 'react';
import {
  Box,
  Skeleton,
  Select,
  MenuItem,
  Typography,
  LinearProgress,
  Button,
  Grid,
} from '@mui/material';
import { mockStories } from './data/mockStories';
import { Donation } from './donation/Donation';

const Stories = () => {
  const [loading, setLoading] = useState(true);
  const [collected, setCollected] = useState(350);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const target = 5000;

  const progress = (collected / target) * 100;

  const handleDonate = () => {
    const donationAmount = 100;

    setCollected(prev => prev + donationAmount);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 4,
        backgroundColor: '#f4f8fd',
        minHeight: '100vh',
        padding: '30px 0',
      }}
    >
      <Box
        boxShadow={3}
        width="fit-content"
        display="flex"
        flexDirection="column"
        sx={{ padding: '30px 20px' }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Фільтри
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Категорії
        </Typography>
        <Select defaultValue="" displayEmpty sx={{ mb: 2 }}>
          <MenuItem value="">Усі</MenuItem>
          <MenuItem value="cat1">Category 1</MenuItem>
          <MenuItem value="cat2">Category 2</MenuItem>
        </Select>

        <Typography variant="h6" component="h2" gutterBottom>
          Статус
        </Typography>
        <Select defaultValue="" displayEmpty sx={{ mb: 2 }}>
          <MenuItem value="">Усі</MenuItem>
          <MenuItem value="cat1">Region 1</MenuItem>
          <MenuItem value="cat2">Region 2</MenuItem>
        </Select>

        <Typography variant="h6" component="h2" gutterBottom>
          Статус
        </Typography>
        <Select defaultValue="" displayEmpty sx={{ mb: 2 }}>
          <MenuItem value="">За замовчуванням</MenuItem>
          <MenuItem value="cat1">Region 1</MenuItem>
          <MenuItem value="cat2">Region 2</MenuItem>
        </Select>

        <Button
          variant="outlined"
          fullWidth
          onClick={handleDonate}
          sx={{ color: '#ffffff', backgroundColor: '#2f68c5', width: '250px' }}
        >
          Застосувати
        </Button>
      </Box>
      {loading ? (
        <Box
          boxShadow={3}
          borderRadius={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '50px 10px',
          }}
        >
          <Skeleton variant="rectangular" width={200} height={218} />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            flexWrap: 'wrap',
          }}
        >
          {mockStories.map(story => (
            <Grid
              key={story.id}
              container
              spacing={2}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                boxShadow: 3,
                borderRadius: 2,
                p: 2,
              }}
            >
              <Grid
                sx={{
                  width: '200px',
                  height: '100px',
                  textAlign: 'center',
                }}
              >
                <Box
                  component="img"
                  src={story.image}
                  alt={story.title}
                  sx={{
                    width: '100px',
                    height: '100px',
                    borderRadius: 2,
                    mb: 2,
                  }}
                />
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
                <Typography variant="body2" gutterBottom>
                  ${story.raised} raised of ${story.goal}
                </Typography>
              </Grid>

              <Grid
                sx={{
                  width: '450px',
                }}
              >
                <Typography variant="h5" component="h2" gutterBottom>
                  {story.title}
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  {story.description}
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleOpenModal}
                  sx={{ backgroundColor: '#2f68c5', marginTop: '35px' }}
                >
                  Швидко задонатити
                </Button>
              </Grid>
            </Grid>
          ))}
        </Box>
      )}
      <Donation open={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default Stories;
