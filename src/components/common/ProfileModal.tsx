import { Modal as MuiModal } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import { SelectedFriendType } from '../friend/Friends';
import { TfiClose } from 'react-icons/tfi';

import { BsFillChatFill } from 'react-icons/bs';

import { BiSolidPencil } from 'react-icons/bi';
import ProfileImageBox from './ProfileImageBox';

const PROFILE_MODAL_NAV_ICONS = {
  friend: [{ title: '1:1 채팅', icon: <BsFillChatFill /> }],
  my: [
    { title: '나와의 채팅', icon: <BsFillChatFill /> },
    { title: '프로필 편집', icon: <BiSolidPencil /> },
  ],
};

interface MuiDrawerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedFriend: SelectedFriendType;
  isMine?: boolean;
}

const ProfileModal = ({
  setIsOpen,
  isOpen,
  selectedFriend,
  isMine,
}: MuiDrawerProps) => {
  const navIcons = isMine
    ? PROFILE_MODAL_NAV_ICONS.my
    : PROFILE_MODAL_NAV_ICONS.friend;

  return (
    <MuiModal onClose={() => setIsOpen(false)} open={isOpen}>
      <DrawerWrapper $isOpen={isOpen}>
        <ModalBox background={selectedFriend.backgroundImage}>
          <ProfileModalContent>
            <ProfileModalHeader>
              <StyledCloseIcon onClick={() => setIsOpen(false)} />
            </ProfileModalHeader>
            <ProfileModalBottomBox>
              <ProfileImageNameBox>
                <ProfileImageBox
                  imageUrl={selectedFriend.profileImage}
                  size="6rem"
                />
                <ProfileName>{selectedFriend.name}</ProfileName>
                {!isMine && <BiSolidPencil />}
              </ProfileImageNameBox>
              <ProfileModalBottomNav>
                {navIcons.map((item) => (
                  <NavIconBox key={item.title}>
                    {item.icon}
                    <p>{item.title}</p>
                  </NavIconBox>
                ))}
              </ProfileModalBottomNav>
            </ProfileModalBottomBox>
          </ProfileModalContent>
        </ModalBox>
      </DrawerWrapper>
    </MuiModal>
  );
};

export default ProfileModal;

const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

const DrawerWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: center;

  animation: ${({ $isOpen }: { $isOpen: boolean }) =>
      $isOpen ? slideIn : slideOut}
    0.1s ease-in-out;
`;

const ModalBox = styled.div<{ background?: string }>`
  width: 500px;
  height: 100vh;

  background-image: ${({ background }) =>
    background
      ? `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(${background})`
      : 'none'};
  background-color: ${({ background }) => (background ? 'none' : '#78848F')};
  background-size: cover;
`;

const ProfileModalContent = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProfileModalHeader = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 1rem;
`;

const StyledCloseIcon = styled(TfiClose)`
  color: ${({ theme }) => theme.colors.gray50};

  font-size: ${({ theme }) => theme.fontSize.md};

  cursor: pointer;
`;

const ProfileModalBottomBox = styled.div`
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 3.5rem;
`;

const ProfileImageNameBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  position: relative;

  svg {
    position: absolute;
    top: 7rem;
    left: 4.7rem;

    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.gray300};
  }
`;

const ProfileName = styled.p`
  position: relative;

  font-size: ${({ theme }) => theme.fontSize.base};

  color: ${({ theme }) => theme.colors.gray50};
`;

const ProfileModalBottomNav = styled.nav`
  width: 100%;
  height: 5rem;

  border-top: 1px solid rgba(250, 250, 250, 0.2);

  display: flex;
  justify-content: center;
  gap: 5.2rem;
`;

const NavIconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 0.8rem;

  color: ${({ theme }) => theme.colors.gray50};

  cursor: pointer;

  svg {
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;
