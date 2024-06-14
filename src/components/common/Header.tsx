import { styled } from '@mui/material';
import { ReactNode, useState } from 'react';
import { LuUserPlus } from 'react-icons/lu';
import FriendDrawer from '../drawer/FriendDrawer';
import AddFriendModal from '../modal/friend/AddFriendModal';
import useModal from '../../hooks/useModal';

const Header = ({ children }: { children?: ReactNode }) => {
  const [friendPlus, setFriendPlus] = useState(false);
  const { isModal, handleModalOpen, handleModalClose, isClosing } = useModal();

  const toggleDrawerOpen = () => {
    setFriendPlus(true);
  };

  const toggleDrawerClose = () => {
    setFriendPlus(false);
  };

  const handleAddFriendModalOpen = () => {
    toggleDrawerClose();
    handleModalOpen();
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
      <FriendDrawer
        friendPlus={friendPlus}
        handleModalOpen={handleAddFriendModalOpen}
        toggleDrawerClose={toggleDrawerClose}
      />
      {isModal && (
        <AddFriendModal
          isModal={isModal}
          onClose={handleModalClose}
          isClosing={isClosing}
          handleModalClose={handleModalClose}
        />
      )}
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
