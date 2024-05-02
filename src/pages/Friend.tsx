import Header from '../components/common/Header';
import {
  Banner,
  Footer,
  Friends,
  Mine,
  Notice,
  UpdatedProfile,
} from '../components';
import { styled } from '@mui/material';

const Friend = () => {
  return (
    <FriendWrapper>
      <Header>친구</Header>
      {/* <Notice />
      <Mine />
      <UpdatedProfile />
      <Banner />
      <Friends /> */}
      <Footer />
    </FriendWrapper>
  );
};

export default Friend;

const FriendWrapper = styled('div')({
  width: '500px',
  minHeight: '100vh',

  backgroundColor: '#ffff',
});
