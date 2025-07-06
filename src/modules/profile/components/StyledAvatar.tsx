import styled from '@emotion/styled';
import { Avatar } from '@mui/material';
import { UserRole } from '../types/User';

const getRoleColor = (role: string) => {
  switch (role) {
    case 'admin':
      return '#f44336';
    case 'ambassador':
      return '#4caf50';
    default:
      return '#fff';
  }
};

const StyledAvatar = styled(Avatar)<{ role?: UserRole }>(({ theme, role }) => ({
  width: 80,
  height: 80,
  border: '2px solid',
  borderColor: role ? getRoleColor(role) : theme.palette.primary.main,
}));

export default StyledAvatar;
