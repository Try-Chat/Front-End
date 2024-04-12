import styled from 'styled-components';
import { GoHome } from 'react-icons/go';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';

const SideBar = () => {
  return (
    <SideBarWrapper>
      <LogoBox>TC</LogoBox>
      <SideBarIconBox>
        <li>
          <HomeIcon />
        </li>
        <li>
          <IoChatboxEllipsesOutline />
        </li>
      </SideBarIconBox>
    </SideBarWrapper>
  );
};

export default SideBar;

const SideBarWrapper = styled.aside`
  width: 5rem;
  height: 100%;

  padding: 1rem;

  box-shadow: 2.5px 0px 5px -5px gray;
`;

const LogoBox = styled.div`
  width: 3.2rem;
  height: 3.2rem;

  font-size: 1.3rem;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.875rem;

  background-color: #4629f2;
  color: #ffff;
`;

const SideBarIconBox = styled.ul`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.7rem;

  margin-top: 2rem;

  svg {
    cursor: pointer;
    font-size: 1.5rem;
  }
`;

const HomeIcon = styled(GoHome)`
  color: #4629f2;
`;
