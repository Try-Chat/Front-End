import defaultImg from '../../assets/images/defaultImg.jpg';
import ProfileImageBox from '../common/ProfileImageBox';
import { useState } from 'react';
import ProfileModal from '../common/ProfileModal';
import { styled } from '@mui/material';

const Mine = () => {
  const [isOpen, setIsOpen] = useState(false);
  const myProfile = {
    name: '어준혁',
    profileImage: '',
    backgroundImage: '',
  };
  return (
    <MineWrapper>
      <MineBox onClick={() => setIsOpen(true)}>
        <ProfileImageBox imageUrl={defaultImg} size="3.2rem" />
        <MyName>어준혁</MyName>
      </MineBox>
      {isOpen && (
        <ProfileModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedFriend={myProfile}
          isMine={true}
        />
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
});

const MyName = styled('div')(({ theme }) => ({
  flex: 1,

  fontSize: theme.typography.subtitle2.fontSize,

  padding: '0 0.6rem',
}));
