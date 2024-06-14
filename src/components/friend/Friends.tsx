import Toggle from '../common/Toggle';
import ProfileImageBox from '../common/ProfileImageBox';
import ProfileModal from '../modal/ProfileModal';
import { styled } from '@mui/material';
import useModal from '../../hooks/useModal';
import ModalLayout from '../modal/ModalLayout';
import useUserStore from '../../store/useUserStore';
import { useQuery } from '@tanstack/react-query';
import { getFriends } from '../../api/friend/profile';
import { useState } from 'react';

const Friends = () => {
  const { id: userId } = useUserStore();
  const { isModal, handleModalClose, handleModalOpen, isClosing } = useModal();
  const [friendProfile, setFriendProfile] = useState<null | ProfileDataType>(
    null,
  );

  if (!userId) return null;

  const { data: friends } = useQuery<
    ProfileDataType[],
    Error,
    ProfileDataType[],
    [string]
  >({
    queryKey: ['friends'],
    queryFn: () => getFriends(userId),
  });

  if (!friends) return null;

  const handleFriendClick = (
    id: number,
    nickname: string,
    greetings: string,
    profileImg: string,
    profileImgPath: string,
    backgroundImg: string,
  ) => {
    setFriendProfile({
      id,
      nickname,
      greetings,
      profileImg,
      profileImgPath,
      backgroundImg,
    });
    handleModalOpen();
  };
  return (
    <FriendsWrapper>
      <Toggle title={`친구 ${friends?.length}`}>
        <FriendsBox>
          {friends.map((friend) => (
            <li
              key={friend.id}
              onClick={() =>
                handleFriendClick(
                  friend.id,
                  friend.nickname,
                  friend.greetings,
                  friend.profileImg,
                  friend.profileImgPath,
                  friend.backgroundImg,
                )
              }>
              <FriendItem
                name={friend.nickname}
                imageUrl={friend.profileImgPath + friend.profileImg}
              />
            </li>
          ))}
        </FriendsBox>
      </Toggle>
      {isModal && friendProfile && (
        <ModalLayout
          isModal={isModal}
          isClosing={isClosing}
          onClose={handleModalClose}>
          <ProfileModal
            handleModalClose={handleModalClose}
            profile={friendProfile}
          />
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
