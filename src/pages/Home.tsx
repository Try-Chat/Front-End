import styled from 'styled-components';
import { SideBar } from '../components';
import Header from '../components/common/Header';

const Home = () => {
  return (
    <HomeWrapper>
      <SideBar />
      <div>
        <Header>친구</Header>
        <FriendList>
          <ul>
            <li>친구</li>
          </ul>
        </FriendList>
      </div>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  width: 22.5rem;

  display: flex;
`;

const HomeBox = styled.div``;

const FriendList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
