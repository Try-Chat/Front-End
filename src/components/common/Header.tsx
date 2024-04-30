import styled from 'styled-components';
import { ReactNode } from 'react';

const Header = ({ children }: { children?: ReactNode }) => {
  return (
    <HeaderWrapper>
      <HeaderLeftBox>{children}</HeaderLeftBox>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #ffff;

  z-index: 100;
  top: 0;
  position: sticky;

  margin: 0 1rem;
`;

const HeaderLeftBox = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
`;
