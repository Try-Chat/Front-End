import styled from 'styled-components';
import { RiHome5Fill } from 'react-icons/ri';
import { RiHome5Line } from 'react-icons/ri';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { IoChatboxEllipses } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <SideBarWrapper>
      <LogoBox>TC</LogoBox>
      <SideBarIconBox>
        <li>
          <Link to="/">
            {currentPage === '/' ? (
              <RiHome5Fill color="#4629f2" />
            ) : (
              <RiHome5Line />
            )}
          </Link>
        </li>
        <li>
          <Link to="/chatroomlist">
            {currentPage === '/chatroomlist' ? (
              <IoChatboxEllipses color="#4629f2" />
            ) : (
              <IoChatboxEllipsesOutline />
            )}
          </Link>
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
  z-index: 1;

  box-shadow: 3px 0px 5px -5px gray;
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
