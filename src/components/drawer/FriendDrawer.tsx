import { Drawer, styled } from '@mui/material';
import { TfiClose } from 'react-icons/tfi';
import idIconImage from '../../assets/images/id.svg';

interface FriendDrawerProps {
  friendPlus: boolean;
  toggleDrawerClose: VoidFunction;
  handleModalOpen: VoidFunction;
}

const FriendDrawer = ({
  friendPlus,
  toggleDrawerClose,
  handleModalOpen,
}: FriendDrawerProps) => {
  return (
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
            <button type="button" onClick={handleModalOpen}>
              <img src={idIconImage} alt="friend id icon" />
              <p>ID로 추가</p>
            </button>
          </PlusOption>
        </PlusOptionBox>
      </DrawerBottomBox>
    </Drawer>
  );
};

export default FriendDrawer;

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
