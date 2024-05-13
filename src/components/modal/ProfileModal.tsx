import { styled } from '@mui/material';
import { SelectedFriendType } from '../friend/Friends';
import { TfiClose } from 'react-icons/tfi';
import { MdPhotoCamera } from 'react-icons/md';
import { BsFillChatFill } from 'react-icons/bs';
import { PiTrash } from 'react-icons/pi';
import { BiSolidPencil } from 'react-icons/bi';
import ProfileImageBox from '../common/ProfileImageBox';
import { useState } from 'react';

const PROFILE_MODAL_NAV_ICONS = {
  friend: [{ title: '1:1 채팅', icon: <BsFillChatFill /> }],
  my: [
    { title: '나와의 채팅', icon: <BsFillChatFill /> },
    { title: '프로필 편집', icon: <BiSolidPencil /> },
  ],
};

interface ProfileModalProps {
  handleModalClose: VoidFunction;
  selectedFriend: SelectedFriendType;
  isMine?: boolean;
}

const ProfileModal = ({
  handleModalClose,
  selectedFriend,
  isMine,
}: ProfileModalProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleCancelEdit = () => {
    setIsEdit(false);
  };
  return (
    <ProfileModalBox background={selectedFriend.backgroundImage}>
      <ProfileModalContent>
        {isEdit ? (
          <EditProfileLayout
            isEdit={isEdit}
            selectedFriend={selectedFriend}
            handleCancelEdit={handleCancelEdit}
          />
        ) : (
          <BasicProfileLayout
            isMine={isMine}
            isEdit={isEdit}
            handleModalClose={handleModalClose}
            selectedFriend={selectedFriend}
            handleEditClick={handleEditClick}
          />
        )}
      </ProfileModalContent>
    </ProfileModalBox>
  );
};

const BasicProfileLayout = ({
  isMine,
  isEdit,
  handleModalClose,
  selectedFriend,
  handleEditClick,
}: {
  isMine?: boolean;
  isEdit: boolean;
  handleModalClose: VoidFunction;
  selectedFriend: SelectedFriendType;
  handleEditClick: VoidFunction;
}) => {
  const navIcons = isMine
    ? PROFILE_MODAL_NAV_ICONS.my
    : PROFILE_MODAL_NAV_ICONS.friend;

  const handleBottomNavIconClick = (title: string) => {
    if (title === '프로필 편집') {
      handleEditClick();
    }
  };

  return (
    <>
      <ProfileModalHeader>
        <button type="button" onClick={handleModalClose}>
          <StyledCloseIcon />
        </button>
      </ProfileModalHeader>
      <ProfileModalBottomBox $isEdit={isEdit}>
        <ProfileImageNameBox>
          <ProfileImageBox imageUrl={selectedFriend.profileImage} size="6rem" />
          <ProfileName>{selectedFriend.name}</ProfileName>
          {!isMine && <StyledPencilIcon />}
        </ProfileImageNameBox>
        <ProfileModalBottomNav $isEdit={isEdit}>
          {navIcons.map((item) => (
            <NavIconBox
              key={item.title}
              onClick={() => handleBottomNavIconClick(item.title)}>
              {item.icon}
              <p>{item.title}</p>
            </NavIconBox>
          ))}
        </ProfileModalBottomNav>
      </ProfileModalBottomBox>
    </>
  );
};

const EditProfileLayout = ({
  selectedFriend,
  handleCancelEdit,
  isEdit,
}: {
  selectedFriend: SelectedFriendType;
  handleCancelEdit: VoidFunction;
  isEdit: boolean;
}) => {
  return (
    <>
      <ProfileModalHeader>
        <button type="button" onClick={handleCancelEdit}>
          취소
        </button>
        <button type="button">
          <StyledTrashIcon />
        </button>
        <button type="button">완료</button>
      </ProfileModalHeader>
      <ProfileModalBottomBox $isEdit={isEdit}>
        <ProfileImageNameBox>
          <ProfileImageBox imageUrl={selectedFriend.profileImage} size="6rem" />
          <CameraIconButton>
            <StyledCameraIcon />
          </CameraIconButton>
        </ProfileImageNameBox>
        <EditBox>
          <span>{selectedFriend.name}</span>
          <button type="button">
            <BiSolidPencil />
          </button>
        </EditBox>
        <EditBox>
          <p>상태메시지를 입력해 주세요.</p>
          <button type="button">
            <BiSolidPencil />
          </button>
        </EditBox>
        <ProfileModalBottomNav $isEdit={isEdit}>
          <CameraIconButton>
            <StyledCameraIcon />
          </CameraIconButton>
        </ProfileModalBottomNav>
      </ProfileModalBottomBox>
    </>
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

const ProfileModalHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '1rem',

  button: {
    fontSize: theme.typography.body1.fontSize,
    color: '#ffff',
    backgroundColor: 'inherit',
  },

  svg: {
    fontSize: theme.typography.subtitle1.fontSize,
  },
}));

const StyledCloseIcon = styled(TfiClose)(({ theme }) => ({
  color: theme.palette.grey[50],

  fontSize: theme.typography.subtitle1.fontSize,
}));

const ProfileModalBottomBox = styled('div')<{ $isEdit: boolean }>(
  ({ $isEdit }) => ({
    bottom: 0,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    gap: $isEdit ? 0 : '3.07125rem',
  }),
);

const ProfileImageNameBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.6rem',

  position: 'relative',

  button: {
    position: 'absolute',
    top: '4.4rem',
    left: '4.4rem',
  },
});

const ProfileName = styled('p')(({ theme }) => ({
  position: 'relative',

  fontSize: theme.typography.subtitle2.fontSize,

  color: theme.palette.grey[50],
}));

const ProfileModalBottomNav = styled('nav')<{ $isEdit: boolean }>(
  ({ $isEdit }) => ({
    width: '100%',
    height: '5rem',

    padding: $isEdit ? '0 1rem' : 0,

    borderTop: $isEdit ? 'none' : '1px solid rgba(250, 250, 250, 0.2)',

    display: 'flex',
    justifyContent: $isEdit ? 'flex-start' : 'center',
    alignItems: $isEdit ? 'center' : 'none',
    gap: $isEdit ? '1rem' : '5.2rem',
  }),
);

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

const StyledTrashIcon = styled(PiTrash)({
  color: 'rgba(250, 250, 250, 0.2)',

  fontSize: '1.4rem !important',
});

const CameraIconButton = styled('button')({
  width: '1.6rem',
  height: '1.6rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: '#ffff',

  borderRadius: '50%',
});

const StyledCameraIcon = styled(MdPhotoCamera)(({ theme }) => ({
  fontSize: theme.typography.subtitle1.fontSize,

  backgroundColor: '#0000',
}));

const StyledPencilIcon = styled(BiSolidPencil)(({ theme }) => ({
  position: 'absolute',
  top: '7.2rem',
  left: '4.7rem',

  fontSize: theme.typography.subtitle2.fontSize,
  color: theme.palette.grey[300],

  cursor: 'pointer',
}));

const EditBox = styled('div')({
  width: 'calc(100% - 3rem)',

  position: 'relative',

  padding: '0.6rem 0',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  borderBottom: '1px solid rgba(250, 250, 250, 0.2)',

  color: '#ffff',

  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    svg: {
      color: '#ffff',

      fontSize: '1rem',

      position: 'absolute',
      right: 0,
    },
  },

  p: {
    fontSize: '0.8rem',
  },

  span: {
    fontSize: '1rem',
  },
});
