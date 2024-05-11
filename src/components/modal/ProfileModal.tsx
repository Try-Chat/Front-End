import { styled } from '@mui/material';
import { SelectedFriendType } from '../friend/Friends';
import { TfiClose } from 'react-icons/tfi';

import { BsFillChatFill } from 'react-icons/bs';

import { BiSolidPencil } from 'react-icons/bi';
import ProfileImageBox from '../common/ProfileImageBox';

const PROFILE_MODAL_NAV_ICONS = {
  friend: [{ title: '1:1 채팅', icon: <BsFillChatFill /> }],
  my: [
    { title: '나와의 채팅', icon: <BsFillChatFill /> },
    { title: '프로필 편집', icon: <BiSolidPencil /> },
  ],
};

interface MuiDrawerProps {
  handleModalClose: VoidFunction;
  selectedFriend: SelectedFriendType;
  isMine?: boolean;
}

const ProfileModal = ({
  handleModalClose,
  selectedFriend,
  isMine,
}: MuiDrawerProps) => {
  const navIcons = isMine
    ? PROFILE_MODAL_NAV_ICONS.my
    : PROFILE_MODAL_NAV_ICONS.friend;

  return (
    <ProfileModalBox background={selectedFriend.backgroundImage}>
      <ProfileModalContent>
        <ProfileModalHeader>
          <button type="button" onClick={handleModalClose}>
            <StyledCloseIcon />
          </button>
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
    </ProfileModalBox>
  );
};

export default ProfileModal;

const ProfileModalBox = styled('div')<{ background?: string }>(
  ({ background }) => ({
    width: '500px',
    height: '100%',

    backgroundImage: background
      ? `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(${background})`
      : 'none',
    backgroundColor: background ? 'none' : '#78848F',
    backgroundSize: 'cover',
  }),
);

const ProfileModalContent = styled('div')({
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const ProfileModalHeader = styled('header')({
  display: 'flex',
  justifyContent: 'space-between',

  padding: '1rem',

  button: {
    backgroundColor: 'inherit',
  },
});

const StyledCloseIcon = styled(TfiClose)(({ theme }) => ({
  color: theme.palette.grey[50],

  fontSize: theme.typography.subtitle1.fontSize,
}));

const ProfileModalBottomBox = styled('div')({
  bottom: 0,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '3.5rem',
});

const ProfileImageNameBox = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',

  position: 'relative',

  svg: {
    position: 'absolute',
    top: '7rem',
    left: '4.7rem',

    fontSize: theme.typography.subtitle2.fontSize,
    color: theme.palette.grey[300],
  },
}));

const ProfileName = styled('p')(({ theme }) => ({
  position: 'relative',

  fontSize: theme.typography.subtitle2.fontSize,

  color: theme.palette.grey[50],
}));

const ProfileModalBottomNav = styled('nav')({
  width: '100%',
  height: '5rem',

  borderTop: '1px solid rgba(250, 250, 250, 0.2)',

  display: 'flex',
  justifyContent: 'center',
  gap: '5.2rem',
});

const NavIconBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  gap: '0.8rem',

  color: theme.palette.grey[50],

  cursor: 'pointer',

  svg: {
    fontSize: theme.typography.subtitle2.fontSize,
  },

  p: {
    fontSize: theme.typography.body1.fontSize,
  },
}));
