import styled from 'styled-components';
import { SideBar } from '../components';
import Header from '../components/common/Header';
import User from '../components/common/User';

const Home = () => {
  return (
    <HomeWrapper>
      <SideBar />
      <HomeBox>
        <Header>친구</Header>
        <MyProfile>
          <User userName="어준혁" />
        </MyProfile>
        <ul>
          <li>
            <User userName="문병훈" />
            <User userName="문희조" />
          </li>
        </ul>
      </HomeBox>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  width: 22.5rem;

  display: flex;
`;

const HomeBox = styled.div`
  width: 17.5rem;
`;

const MyProfile = styled.div`
  border-bottom: 1px solid #dee2e6;
`;
