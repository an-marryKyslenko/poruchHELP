import styled from '@emotion/styled';
import { Stack } from '@mui/material';

export const AuthContainer = styled(Stack)(({ theme }) => ({
  // minHeight: '100%',
  // padding: theme.spacing(2),
  // [theme.breakpoints.up('sm')]: {
  //   padding: theme.spacing(4),
  // },
  display: 'flex',
  justifyContent: 'center',
  // alignContent: 'center',
  ...theme,
}));
