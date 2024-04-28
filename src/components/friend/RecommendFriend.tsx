import styled from 'styled-components';
import Toggle from '../common/Toggle';
import { MdKeyboardArrowRight } from 'react-icons/md';
import ProfileImageBox from '../common/ProfileImageBox';
import recommend from '../../assets/images/recommend.png';

const RecommendFriend = () => {
  return (
    <RecommendFriendWrapper>
      <Toggle title="추천친구">
        <RecommendFriendBox>
          <ProfileImageBox imageUrl={recommend} size="2.5rem" />
          <Title>새로운 친구를 만나보세요!</Title>
          <span>17</span>
          <StyledArrowRightIcon />
        </RecommendFriendBox>
      </Toggle>
    </RecommendFriendWrapper>
  );
};

export default RecommendFriend;

const RecommendFriendWrapper = styled.div`
  margin: 0 1rem;

  cursor: pointer;
`;

const RecommendFriendBox = styled.div`
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

  font-size: ${({ theme }) => theme.fontSize.base};

  padding: 0 0.6rem;
`;

const StyledArrowRightIcon = styled(MdKeyboardArrowRight)`
  font-size: ${({ theme }) => theme.fontSize.lg};

  color: ${({ theme }) => theme.colors.gray200};
`;
