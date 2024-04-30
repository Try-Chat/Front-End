import styled from 'styled-components';
import defaultImg from '../../assets/images/defaultImg.jpg';
import ProfileImageBox from '../common/ProfileImageBox';
import { useState } from 'react';
import ProfileModal from '../common/ProfileModal';

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

const MineWrapper = styled.div`
  display: flex;
  align-items: center;

  margin: 0.7rem 1rem;
`;

const MineBox = styled.div`
  display: flex;
  align-items: center;

  flex: 1;
`;

const MyName = styled.div`
  flex: 1;

  font-size: ${({ theme }) => theme.fontSize.base};

  padding: 0 0.6rem;
`;
