import styled from 'styled-components';
import SideBar from './SideBar';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper>
      <SideBar />
      <ListBox>{children}</ListBox>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  width: 22.5rem;
  background-color: #ffff;

  display: flex;
`;

const ListBox = styled.div`
  width: 17.5rem;
`;
