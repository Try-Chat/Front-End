import styled from 'styled-components';
import Toggle from '../common/Toggle';
import { MdKeyboardArrowRight } from 'react-icons/md';
import ProfileImageBox from '../common/ProfileImageBox';
import recommend from '../../assets/images/recommend.png';

const RecommendFriend = () => {
  return (
    <div>
      <Toggle title="추천친구" />
      <RecommendFriendWrapper>
        <ProfileImageBox imageUrl={recommend} size="2.5rem" />
        <Title>새로운 친구를 만나보세요!</Title>
        <span>17</span>
        <StyledArrowRightIcon />
      </RecommendFriendWrapper>
    </div>
  );
};

export default RecommendFriend;

const RecommendFriendWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.7rem;

  span {
    font-size: ${({ theme }) => theme.fontSize.sm};

    color: ${({ theme }) => theme.colors.gray200};
  }
`;

const Title = styled.div`
  flex: 1;

  font-size: ${({ theme }) => theme.fontSize.sm};

  padding: 0 0.6rem;
`;

const StyledArrowRightIcon = styled(MdKeyboardArrowRight)`
  font-size: ${({ theme }) => theme.fontSize.lg};

  color: ${({ theme }) => theme.colors.gray200};
`;
