import { Box, Button } from '@mui/material';

const pages = ['Catalog', 'Blog', 'Add story'];

type Props = {
  onCloseMenu?: () => void;
};
const NavMenu = ({ onCloseMenu }: Props) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map(page => (
        <Button
          key={page}
          onClick={onCloseMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default NavMenu;
