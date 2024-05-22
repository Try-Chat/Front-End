import { styled } from '@mui/material';
import { TfiClose } from 'react-icons/tfi';
import { MdPhotoCamera } from 'react-icons/md';
import { BsFillChatFill } from 'react-icons/bs';
import { PiTrash } from 'react-icons/pi';
import { BiSolidPencil } from 'react-icons/bi';
import ProfileImageBox from '../common/ProfileImageBox';
import { useState } from 'react';
import useModal from '../../hooks/useModal';
import MyProfileEditModal from './profile/MyProfileEditModal';
import ModalLayout from './ModalLayout';
import FriendProfileEditModal from './profile/FriendProfileEditModal';

interface ProfileModalProps {
  handleModalClose: VoidFunction;
  profile: MyProfileData;
  isMine?: boolean;
}

const ProfileModal = ({
  handleModalClose,
  profile,
  isMine,
}: ProfileModalProps) => {
  return (
    <ProfileModalBox background={profile.backgroundImg}>
      <ProfileModalContent>
        {isMine ? (
          <MyProfileLayout
            isMine={isMine}
            profile={profile}
            handleModalClose={handleModalClose}
          />
        ) : (
          <FriendProfileLayout
            isMine={isMine}
            profile={profile}
            handleModalClose={handleModalClose}
          />
        )}
      </ProfileModalContent>
    </ProfileModalBox>
  );
};

const MyProfileLayout = ({
  profile,
  isMine,
  handleModalClose,
}: ProfileModalProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleCancelEdit = () => {
    setIsEdit(false);
  };

  return (
    <>
      {isEdit ? (
        <EditMyProfileLayout
          isEdit={isEdit}
          handleCancelEdit={handleCancelEdit}
          profile={profile}
        />
      ) : (
        <>
          <ProfileModalHeader>
            <button type="button" onClick={handleModalClose}>
              <StyledCloseIcon />
            </button>
          </ProfileModalHeader>
          <ProfileModalBottomBox>
            <ProfileImageNameBox>
              <ProfileImageBox imageUrl={profile.profileImg} size="6rem" />
              <FriendNameBox>
                <ProfileName $isMine={isMine}>{profile.nickname}</ProfileName>
              </FriendNameBox>
              <StatusMessage>{profile.greetings}</StatusMessage>
            </ProfileImageNameBox>
            <ProfileModalBottomNav $isEdit={isEdit}>
              <NavIconBox>
                <BsFillChatFill />
                <p>나와의 채팅</p>
              </NavIconBox>
              <NavIconBox onClick={handleEditClick}>
                <BiSolidPencil />
                <p>프로필 편집</p>
              </NavIconBox>
            </ProfileModalBottomNav>
          </ProfileModalBottomBox>
        </>
      )}
    </>
  );
};

const FriendProfileLayout = ({
  isMine,
  profile,
  handleModalClose,
}: ProfileModalProps) => {
  const {
    isClosing,
    handleModalClose: handleFriendModalClose,
    isModal,
    handleModalOpen,
  } = useModal();

  return (
    <>
      <ProfileModalHeader>
        <button type="button" onClick={handleModalClose}>
          <StyledCloseIcon />
        </button>
      </ProfileModalHeader>
      <ProfileModalBottomBox>
        <ProfileImageNameBox>
          <ProfileImageBox imageUrl={profile.profileImg} size="6rem" />
          <FriendNameBox>
            <ProfileName $isMine={isMine}>{profile.nickname}</ProfileName>
            <StyledPencilIcon onClick={handleModalOpen} />
          </FriendNameBox>
          <StatusMessage>{profile.greetings}</StatusMessage>
        </ProfileImageNameBox>
        <ProfileModalBottomNav>
          <NavIconBox>
            <BsFillChatFill />
            <p>1:1 채팅</p>
          </NavIconBox>
        </ProfileModalBottomNav>
      </ProfileModalBottomBox>
      <ModalLayout
        isClosing={isClosing}
        onClose={handleFriendModalClose}
        isModal={isModal}>
        <FriendProfileEditModal
          handleModalClose={handleFriendModalClose}
          profile={profile}
        />
      </ModalLayout>
    </>
  );
};

const EditMyProfileLayout = ({
  profile,
  handleCancelEdit,
  isEdit,
}: {
  profile: MyProfileData;
  handleCancelEdit: VoidFunction;
  isEdit: boolean;
}) => {
  const [editTarget, setEditTarget] = useState('');
  const { isModal, handleModalOpen, handleModalClose, isClosing } = useModal();
  const handleEditClick = (field: string) => {
    setEditTarget(field);
    handleModalOpen();
  };
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
      <ProfileModalBottomBox>
        <ProfileImageNameBox>
          <ProfileImageBox imageUrl={profile.profileImg} size="6rem" />
          <CameraIconButton>
            <StyledCameraIcon />
          </CameraIconButton>
        </ProfileImageNameBox>
        <EditBox>
          <span>{profile.nickname}</span>
          <button type="button" onClick={() => handleEditClick('name')}>
            <BiSolidPencil />
          </button>
        </EditBox>
        <EditBox>
          <p>{profile.greetings || '상태메시지를 입력해 주세요.'}</p>
          <button
            type="button"
            onClick={() => handleEditClick('statusMessage')}>
            <BiSolidPencil />
          </button>
        </EditBox>
        <ProfileModalBottomNav $isEdit={isEdit}>
          <CameraIconButton>
            <StyledCameraIcon />
          </CameraIconButton>
        </ProfileModalBottomNav>
      </ProfileModalBottomBox>
      <ModalLayout
        isModal={isModal}
        onClose={handleModalClose}
        isClosing={isClosing}
        animation>
        <MyProfileEditModal
          profile={profile}
          editTarget={editTarget}
          handleModalClose={handleModalClose}
        />
      </ModalLayout>
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
    fontSize: theme.typography.subtitle2.fontSize,
    color: '#ffff',
    backgroundColor: 'inherit',
  },

  svg: {
    fontSize: theme.typography.subtitle1.fontSize,
  },
}));

const StyledCloseIcon = styled(TfiClose)(({ theme }) => ({
  color: '#ffff',

  fontSize: theme.typography.subtitle1.fontSize,
}));

const ProfileModalBottomBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

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

const ProfileName = styled('p')<{ $isMine?: boolean }>(
  ({ theme, $isMine }) => ({
    flex: 1,

    paddingLeft: $isMine ? 'none' : '1rem',
    textAlign: 'center',

    fontSize: theme.typography.subtitle2.fontSize,

    color: '#ffff',
  }),
);

const ProfileModalBottomNav = styled('nav')<{ $isEdit?: boolean }>(
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

const FriendNameBox = styled('div')({
  display: 'flex',
  alignItems: 'center',

  width: '90%',
});

const StatusMessage = styled('p')(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  color: '#ffff',

  height: '2.4625rem',
}));
