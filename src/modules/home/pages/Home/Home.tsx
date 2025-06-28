import { Box, Grid, Skeleton } from '@mui/material';

const Home = () => {
  return (
    <Box component="section" margin={2}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Skeleton variant="rectangular" width="auto" height={318} />
        </Grid>
        <Grid size={6}>
          <Skeleton variant="rectangular" width="auto" height={218} />
        </Grid>
        <Grid size={6}>
          <Skeleton variant="rectangular" width="auto" height={218} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
