import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';
import defaultImg from '../../assets/images/defaultImg.jpg';
import defaultImg2 from '../../assets/images/defaultImg2.jpg';
import ProfileImageBox from '../common/ProfileImageBox';

const Mine = () => {
  return (
    <MineWrapper>
      <ProfileImageBox imageUrl={defaultImg} size="3.2rem" />
      <MyName>어준혁</MyName>
      <ProfileImageBox imageUrl={defaultImg2} size="1.4rem" />
      <StyledArrowRightIcon />
    </MineWrapper>
  );
};

export default Mine;

const MineWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 0.7rem 0;
`;

const MyName = styled.div`
  flex: 1;

  font-size: ${({ theme }) => theme.fontSize.sm};

  padding: 0 0.6rem;
`;

const StyledArrowRightIcon = styled(MdKeyboardArrowRight)`
  font-size: ${({ theme }) => theme.fontSize.lg};

  color: ${({ theme }) => theme.colors.gray200};
`;
