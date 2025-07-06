import { Box, Drawer } from '@mui/material';
import { FC, ReactNode } from 'react';

type Props = {
  openDrawer: boolean;
  closeDrawer: () => void;
  children: ReactNode;
};

const EditorDrawer: FC<Props> = ({ openDrawer, closeDrawer, children }) => {
  return (
    <Drawer anchor="right" open={openDrawer} onClose={closeDrawer}>
      <Box
        sx={{
          p: 2,
        }}
      >
        {children}
      </Box>
    </Drawer>
  );
};

export default EditorDrawer;
