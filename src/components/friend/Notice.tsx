import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';
const Notice = () => {
  return (
    <NoticeWrapper>
      <NoticeCategory>업데이트</NoticeCategory>
      <NoticeTitle>4월 신규 기능 안내</NoticeTitle>
      <NoticeIcon />
    </NoticeWrapper>
  );
};

export default Notice;

const NoticeWrapper = styled.div`
  height: 2.2rem;

  margin: 0 1rem;
  padding: 0 0.5rem;
  border-radius: 1.25rem;

  display: flex;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSize.sm};

  background-color: #f1f3f5;

  cursor: pointer;
`;

const NoticeCategory = styled.div`
  width: fit-content;

  padding: 0.25rem 0.5rem;

  border-radius: 1.25rem;

  color: #dee2e6;
  background-color: #868e96;
`;

const NoticeTitle = styled.div`
  flex: 1;

  padding: 0 0.7rem;
  color: #868e96;
`;

const NoticeIcon = styled(MdKeyboardArrowRight)`
  font-size: ${({ theme }) => theme.fontSize.lg};

  color: ${({ theme }) => theme.colors.gray200};
`;