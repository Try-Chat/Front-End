import defaultImg from '../../assets/images/defaultImg.jpg';
import ProfileImageBox from '../common/ProfileImageBox';
import ProfileModal from '../modal/ProfileModal';
import { styled } from '@mui/material';
import useModal from '../../hooks/useModal';

const Mine = () => {
  const { isModal, handleModalClose, handleModalOpen, Modal } = useModal();
  const myProfile = {
    name: '어준혁',
    profileImage: '',
    backgroundImage: '',
  };
  return (
    <MineWrapper>
      <MineBox onClick={handleModalOpen}>
        <ProfileImageBox imageUrl={defaultImg} size="3.2rem" />
        <MyName>어준혁</MyName>
      </MineBox>
      {isModal && (
        <Modal>
          <ProfileModal
            handleModalClose={handleModalClose}
            selectedFriend={myProfile}
            isMine={true}
          />
        </Modal>
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

const MyName = styled('div')(({ theme }) => ({
  flex: 1,

  fontSize: theme.typography.subtitle2.fontSize,

  padding: '0 0.6rem',
}));
