import { Box, Container, Toolbar } from '@mui/material';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <Box color="blueviolet" bgcolor="#342e4a" component="footer" p={2}>
      <Container>
        <Toolbar disableGutters>
          <Logo />
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Footer;
