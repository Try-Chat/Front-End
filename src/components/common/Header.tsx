import { ReactNode } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <HeaderWrapper>{children}</HeaderWrapper>;
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 4.5rem;

  display: flex;
  align-items: center;

  padding: 1rem;

  font-size: 1.25rem;
  font-weight: bold;

  border-bottom: 1px solid #dee2e6;
`;
