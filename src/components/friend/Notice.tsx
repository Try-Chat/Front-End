import { styled } from '@mui/material';
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

const NoticeWrapper = styled('div')(({ theme }) => ({
  height: '2.2rem',

  margin: '0 1rem',
  padding: '0 0.5rem',
  borderRadius: '1.25rem',

  display: 'flex',
  alignItems: 'center',

  fontSize: theme.typography.body1.fontSize,

  backgroundColor: '#f1f3f5',
}));

const NoticeCategory = styled('div')({
  width: 'fit-content',

  padding: '0.25rem 0.5rem',

  borderRadius: '1.25rem',

  color: '#dee2e6',
  backgroundColor: '#868e96',
});

const NoticeTitle = styled('div')({
  flex: 1,

  padding: '0 0.7rem',
  color: '#868e96',
});

const NoticeIcon = styled(MdKeyboardArrowRight)(({ theme }) => ({
  fontSize: theme.typography.h3.fontSize,

  color: theme.palette.grey[200],
}));
