import styled from 'styled-components';
import { FaUser } from 'react-icons/fa6';
import { IoChatbubbleSharp } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

const FOOTER_ICONS = [
  { page: '/', icon: <FaUser />, title: '친구' },
  { page: '/chatroomlist', icon: <IoChatbubbleSharp />, title: '채팅' },
];

const Footer = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <FooterWrapper>
      {FOOTER_ICONS.map((item) => (
        <FooterIconBox
          key={item.page}
          to={item.page}
          $currentPage={currentPage === item.page}>
          {item.icon}
          <p>{item.title}</p>
        </FooterIconBox>
      ))}
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.nav`
  width: inherit;
  height: 4rem;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.5rem;

  position: fixed;
  bottom: 0;

  border-top: 0.1px solid ${({ theme }) => theme.colors.gray250};

  background-color: ${({ theme }) => theme.colors.gray50};
`;

const FooterIconBox = styled(Link)<{ $currentPage: boolean }>`
  width: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;

  background-color: ${({ theme }) => theme.colors.gray50};
  color: ${(props) => (props.$currentPage ? '#000' : '#868e96')};

  text-decoration: none;

  svg {
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
