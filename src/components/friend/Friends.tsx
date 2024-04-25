import styled from 'styled-components';
import Toggle from '../common/Toggle';
import ProfileImageBox from '../common/ProfileImageBox';

const FriendItem = ({ name }: { name: string }) => {
  return (
    <FriendItemWrapper>
      <ProfileImageBox size="2.5rem" />
      <FriendName>{name}</FriendName>
    </FriendItemWrapper>
  );
};

const Friends = () => {
  return (
    <div>
      <Toggle title="친구 10" />
      <FriendsWrapper>
        <FriendItem name="고미선" />
        <FriendItem name="정충일" />
        <FriendItem name="김혜미" />
        <FriendItem name="김해찬" />
        <FriendItem name="문희조" />
        <FriendItem name="곽민혁" />
        <FriendItem name="김태훈" />
        <FriendItem name="이준엽" />
        <FriendItem name="문병훈" />
        <FriendItem name="서지수" />
      </FriendsWrapper>
    </div>
  );
};

export default Friends;

const FriendsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FriendItemWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
`;

const FriendName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;
