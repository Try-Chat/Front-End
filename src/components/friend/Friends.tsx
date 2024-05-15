import Toggle from '../common/Toggle';
import ProfileImageBox from '../common/ProfileImageBox';
import jung from '../../assets/images/jung.jpg';
import background from '../../assets/images/background.jpg';
import { useState } from 'react';
import ProfileModal from '../modal/ProfileModal';
import { styled } from '@mui/material';
import useModal from '../../hooks/useModal';
import ModalLayout from '../modal/ModalLayout';

const FRIEND_INFORMATIONS = [
  {
    name: '정충일',
    setName: '정충일',
    profileImage: jung,
    backgroundImage: background,
  },
  { name: '고미선', setName: '고미선', profileImage: '', backgroundImage: '' },
  { name: '김혜미', setName: '김혜미', profileImage: '', backgroundImage: '' },
  { name: '김해찬', setName: '김해찬', profileImage: '', backgroundImage: '' },
  { name: '문희조', setName: '문희조', profileImage: '', backgroundImage: '' },
  { name: '곽민혁', setName: '곽민혁', profileImage: '', backgroundImage: '' },
  { name: '문병훈', setName: '문병훈', profileImage: '', backgroundImage: '' },
  { name: '서지수', setName: '서지수', profileImage: '', backgroundImage: '' },
  { name: '김태훈', setName: '김태훈', profileImage: '', backgroundImage: '' },
  { name: '이준엽', setName: '이준엽', profileImage: '', backgroundImage: '' },
];

export interface profileType {
  name: string;
  setName?: string;
  profileImage?: string;
  backgroundImage?: string;
  memo?: string;
  statusMessage?: string;
}

const Friends = () => {
  const { isModal, handleModalClose, handleModalOpen, isClosing } = useModal();
  const [profile, setprofile] = useState<profileType>({
    name: '',
    setName: '',
    profileImage: '',
    backgroundImage: '',
  });

  const handleFriendClick = (
    name: string,
    setName: string,
    profileImage: string,
    backgroundImage: string,
  ): void => {
    handleModalOpen();
    setprofile({
      name,
      profileImage,
      backgroundImage,
      setName,
    });
  };

  return (
    <FriendsWrapper>
      <Toggle title="친구 10">
        <FriendsBox>
          {FRIEND_INFORMATIONS.map((friend) => (
            <li
              key={friend.name}
              onClick={() =>
                handleFriendClick(
                  friend.name,
                  friend.setName,
                  friend.profileImage,
                  friend.backgroundImage,
                )
              }>
              <FriendItem name={friend.name} imageUrl={friend.profileImage} />
            </li>
          ))}
        </FriendsBox>
      </Toggle>
      {isModal && (
        <ModalLayout
          isModal={isModal}
          isClosing={isClosing}
          onClose={handleModalClose}>
          <ProfileModal handleModalClose={handleModalClose} profile={profile} />
        </ModalLayout>
      )}
    </FriendsWrapper>
  );
};

const FriendItem = ({
  name,
  imageUrl,
}: {
  name: string;
  imageUrl?: string;
}) => {
  return (
    <FriendItemWrapper>
      <ProfileImageBox size="2.5rem" imageUrl={imageUrl} />
      <FriendName>{name}</FriendName>
    </FriendItemWrapper>
  );
};

export default Friends;

const FriendsWrapper = styled('div')({
  margin: '0 1rem',
  paddingBottom: '4rem',
});

const FriendsBox = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  marginBottom: '1rem',
  listStyleType: 'none',

  li: {
    cursor: 'pointer',
  },
});

const FriendItemWrapper = styled('div')({
  display: 'flex',
  gap: '0.6rem',
  alignItems: 'center',
});

const FriendName = styled('p')(({ theme }) => ({
  fontSize: theme.typography.subtitle2.fontSize,
}));
