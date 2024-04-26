import styled from 'styled-components';
import Toggle from '../common/Toggle';
import ProfileImageBox from '../common/ProfileImageBox';
import jung from '../../assets/images/jung.jpg';
import background from '../../assets/images/background.jpg';
import { useState } from 'react';
import ProfileModal from '../common/ProfileModal';

const FRIEND_INFORMATIONS = [
  { name: '정충일', profileImage: jung, backgroundImage: background },
  { name: '고미선', profileImage: '', backgroundImage: '' },
  { name: '김혜미', profileImage: '', backgroundImage: '' },
  { name: '김해찬', profileImage: '', backgroundImage: '' },
  { name: '문희조', profileImage: '', backgroundImage: '' },
  { name: '곽민혁', profileImage: '', backgroundImage: '' },
  { name: '문병훈', profileImage: '', backgroundImage: '' },
  { name: '서지수', profileImage: '', backgroundImage: '' },
  { name: '김태훈', profileImage: '', backgroundImage: '' },
  { name: '이준엽', profileImage: '', backgroundImage: '' },
];

export interface SelectedFriendType {
  name: string;
  profileImage?: string;
  backgroundImage?: string;
}

const Friends = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<SelectedFriendType>({
    name: '',
    profileImage: '',
    backgroundImage: '',
  });

  const handleFriendClick = (
    name: string,
    profileImage: string,
    backgroundImage: string,
  ): void => {
    setIsOpen(true);
    setSelectedFriend({
      name,
      profileImage,
      backgroundImage,
    });
  };

  return (
    <FriendsWrapper>
      <Toggle title="친구 10" />
      <FriendsBox>
        {FRIEND_INFORMATIONS.map((friend) => (
          <li
            key={friend.name}
            onClick={() =>
              handleFriendClick(
                friend.name,
                friend.profileImage,
                friend.backgroundImage,
              )
            }>
            <FriendItem name={friend.name} imageUrl={friend.profileImage} />
          </li>
        ))}
      </FriendsBox>
      <ProfileModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedFriend={selectedFriend}
      />
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

const FriendsWrapper = styled.div`
  margin: 0 1rem;
`;

const FriendsBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-bottom: 1rem;
`;

const FriendItemWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  cursor: pointer;
`;

const FriendName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
`;
