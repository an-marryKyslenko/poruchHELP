import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Box, Container } from '@mui/material';

const Layout = () => {
  return (
    <Box
      bgcolor="#EAF4FC"
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <Header />
      <Container
        component="main"
        sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}
      >
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
