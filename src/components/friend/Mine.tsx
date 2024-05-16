import defaultImg from '../../assets/images/defaultImg.jpg';
import ProfileImageBox from '../common/ProfileImageBox';
import ProfileModal from '../modal/ProfileModal';
import { styled } from '@mui/material';
import useModal from '../../hooks/useModal';
import ModalLayout from '../modal/ModalLayout';
import background from '../../assets/images/background.jpg';

const myProfile = {
  name: '어준혁',
  profileImage: '',
  statusMessage: '빨리 끝내자!',
  backgroundImage: background,
};

const Mine = () => {
  const { isModal, handleModalClose, handleModalOpen, isClosing } = useModal();
  return (
    <MineWrapper>
      <MineBox onClick={handleModalOpen}>
        <ProfileImageBox imageUrl={defaultImg} size="3.2rem" />
        <TextBox>
          <MyName>{myProfile.name}</MyName>
          <MyStatusMessage>{myProfile.statusMessage}</MyStatusMessage>
        </TextBox>
      </MineBox>
      {isModal && (
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
