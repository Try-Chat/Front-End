import styled from 'styled-components';
import Header from '../components/common/Header';
import {
  Banner,
  Channel,
  Footer,
  Friends,
  Mine,
  Notice,
  Pung,
  RecommendFriend,
  UpdatedProfile,
} from '../components';

const Friend = () => {
  return (
    <FriendWrapper>
      <Header />
      <Notice />
      <Mine />
      <UpdatedProfile />
      <Pung />
      <Banner />
      <RecommendFriend />
      <Channel />
      <Friends />
      <Footer />
    </FriendWrapper>
  );
};

export default Friend;

const FriendWrapper = styled.div`
  width: 390px;

  background-color: #ffff;
  min-height: 100vh;
`;
