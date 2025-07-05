import { UserRole } from '../types/User';
import CheckIcon from '@mui/icons-material/Check';
import GppGoodIcon from '@mui/icons-material/GppGood';

const RoleBadge = ({ role }: { role: UserRole }) => {
  switch (role) {
    case 'ambassador':
      return (
        <CheckIcon
          fontSize="small"
          sx={{
            color: '#fff',
            backgroundColor: '#4caf50',
            borderRadius: '50%',
          }}
        />
      );
    case 'admin':
      return (
        <GppGoodIcon
          fontSize="small"
          sx={{
            color: '#fff',
            backgroundColor: '#f44336',
            borderRadius: '50%',
          }}
        />
      );
    default:
      return null;
  }
};

export default RoleBadge;
