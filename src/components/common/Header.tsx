import { Drawer, styled } from '@mui/material';
import { ReactNode, useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import { LuUserPlus } from 'react-icons/lu';
import idIconImage from '../../assets/images/id.svg';
import { fontSize, height } from '@mui/system';

const Header = ({ children }: { children?: ReactNode }) => {
  const [friendPlus, setFriendPlus] = useState(false);

  const toggleDrawerOpen = () => {
    setFriendPlus(true);
  };

  const toggleDrawerClose = () => {
    setFriendPlus(false);
  };

  return (
    <HeaderWrapper>
      <HeaderLeftBox>{children}</HeaderLeftBox>
      <ul>
        <IconBox>
          <button type="button" onClick={toggleDrawerOpen}>
            <LuUserPlus />
          </button>
        </IconBox>
      </ul>
      <Drawer anchor="top" open={friendPlus} onClose={toggleDrawerClose}>
        <DrawerTopBox>
          <button type="button" onClick={toggleDrawerClose}>
            <TfiClose />
          </button>
          <Title>친구 추가</Title>
        </DrawerTopBox>
        <DrawerBottomBox>
          <PlusOptionBox>
            <PlusOption>
              <button type="button">
                <img src={idIconImage} alt="friend id icon" />
                <p>ID로 추가</p>
              </button>
            </PlusOption>
          </PlusOptionBox>
        </DrawerBottomBox>
      </Drawer>
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

const HeaderLeftBox = styled('p')(({ theme }) => ({
  fontSize: theme.typography.h3.fontSize,
}));

const IconBox = styled('li')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  button: {
    outline: 'none',
  },

  svg: {
    fontSize: theme.typography.h3.fontSize,
  },
}));

const DrawerTopBox = styled('div')({
  display: 'flex',
  alignItems: 'center',

  height: '3rem',

  button: {
    display: 'flex',
    alignItems: 'center',
  },

  svg: {
    fontSize: '1rem',
  },
});

const Title = styled('p')(({ theme }) => ({
  flex: 1,
  textAlign: 'center',

  paddingRight: '1.4rem',
  margin: 0,

  fontSize: theme.typography.subtitle2.fontSize,
}));

const DrawerBottomBox = styled('div')({
  padding: '0 0.8rem 0.8rem 0.8rem',
});

const PlusOptionBox = styled('ul')({
  display: 'flex',
  justifyContent: 'space-between',

  listStyleType: 'none',
});

const PlusOption = styled('li')({
  display: 'flex',
  flexDirection: 'column',

  img: {
    width: '2rem',
  },

  p: {
    fontSize: '0.8rem',
  },
});
