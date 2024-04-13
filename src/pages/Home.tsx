import styled from 'styled-components';
import { Layout } from '../components';
import Header from '../components/common/Header';
import User from '../components/common/User';

const Home = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Home;

const MyProfile = styled.div`
  border-bottom: 1px solid #dee2e6;
`;
