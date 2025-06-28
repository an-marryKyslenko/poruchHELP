import styled from '@emotion/styled';
import MuiCard from '@mui/material/Card';

export const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  // padding: theme.spacing(4),
  // gap: theme.spacing(2),
  padding: 30,
  gap: 20,
  boxShadow: `hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px,
    hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px`,
  // [theme.breakpoints.up('sm')]: {
  //   width: '450px',
  // },
  // ...theme.applyStyles('dark', {
  //   boxShadow:
  //     'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  // }),
  ...theme,
}));
