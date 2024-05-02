import { styled } from '@mui/material';
import { ReactNode } from 'react';

const Header = ({ children }: { children?: ReactNode }) => {
  return (
    <HeaderWrapper>
      <HeaderLeftBox>{children}</HeaderLeftBox>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled('header')({
  height: '3rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: '#ffff',

  zIndex: 100,
  top: 0,
  position: 'sticky',

  margin: '0 1rem',
});

const HeaderLeftBox = styled('h2')(({ theme }) => ({
  fontSize: theme.typography.h3.fontSize,
}));
