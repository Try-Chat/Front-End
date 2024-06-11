import { styled } from '@mui/material';
import { Footer, Friends, Mine } from '../components';
import Header from '../components/common/Header';

const Friend = () => {
  return (
    <FriendWrapper>
      <Header>친구</Header>
      <FriendMainBox>
        <Mine />
        <Friends />
      </FriendMainBox>
      <Footer />
    </FriendWrapper>
  );
};

export default Friend;

const FriendWrapper = styled('div')({
  width: '500px',
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',

  backgroundColor: '#ffff',
});

const FriendMainBox = styled('main')({
  overflowY: 'auto',
  flex: 1,

  '&::-webkit-scrollbar': {
    width: '0.5rem',
  },

  '&::-webkit-scrollbar-thumb': {
    background: '#adb5bd',
    borderRadius: '5px',
    backgroundClip: 'padding-box',
    border: '3px solid transparent',
  },

  '&::-webkit-scrollbar-track': {
    borderRadius: '5px',
    marginBottom: '4rem',
  },
});
