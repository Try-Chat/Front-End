import ProfileImageBox from '../common/ProfileImageBox';
import ProfileModal from '../modal/ProfileModal';
import { styled } from '@mui/material';
import useModal from '../../hooks/useModal';
import ModalLayout from '../modal/ModalLayout';
import { useQuery } from '@tanstack/react-query';
import { getMyProfile } from '../../api/friend/profile';
import useUserStore from '../../store/useUserStore';

const Mine = () => {
  const { id: userId } = useUserStore();

  if (!userId) return null;

  const { isModal, handleModalClose, handleModalOpen, isClosing } = useModal();
  const { data: myProfile } = useQuery<
    MyProfileDataType,
    Error,
    MyProfileDataType,
    [string]
  >({
    queryKey: ['myProfile'],
    queryFn: () => getMyProfile(userId),
  });

  if (!myProfile) return null;

  return (
    <MineWrapper>
      <MineBox onClick={handleModalOpen}>
        <ProfileImageBox
          imageUrl={myProfile?.profileImgPath + myProfile?.profileImg}
          size="3.2rem"
        />
        <TextBox>
          <MyName>{myProfile?.nickname}</MyName>
          <MyStatusMessage>{myProfile?.greetings}</MyStatusMessage>
        </TextBox>
      </MineBox>
      {isModal && myProfile && (
        <ModalLayout
          isClosing={isClosing}
          isModal={isModal}
          onClose={handleModalClose}>
          <ProfileModal
            handleModalClose={handleModalClose}
            profile={myProfile}
            isMine
          />
        </ModalLayout>
      )}
    </MineWrapper>
  );
};

export default Mine;

const MineWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',

  margin: '0.7rem 1rem',
});

const MineBox = styled('div')({
  display: 'flex',
  alignItems: 'center',

  flex: 1,

  cursor: 'pointer',
});

const TextBox = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',

  padding: '0 0.6rem',
});

const MyName = styled('p')(({ theme }) => ({
  fontSize: theme.typography.subtitle2.fontSize,
}));

const MyStatusMessage = styled('p')(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  color: theme.palette.grey[400],
}));
