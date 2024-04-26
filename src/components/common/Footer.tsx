import styled from 'styled-components';
import { FaUser } from 'react-icons/fa6';
import { IoChatbubbleSharp } from 'react-icons/io5';
import { IoChatbubblesSharp } from 'react-icons/io5';
import { AiFillShopping } from 'react-icons/ai';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

interface FooterIconBoxProps {
  page: string;
  currentPage: string;
}

const FOOTER_ICONS = [
  { page: '/', icon: <FaUser />, title: '친구' },
  { page: '/chat', icon: <IoChatbubbleSharp />, title: '채팅' },
  { page: '/openchat', icon: <IoChatbubblesSharp />, title: '오픈채팅' },
  { page: '/shopping', icon: <AiFillShopping />, title: '쇼핑' },
  { page: '/more', icon: <MdOutlineMoreHoriz />, title: '더보기' },
];

const Footer = () => {
  const location = useLocation();
  const currentPage = location.pathname;
  return (
    <FooterWrapper>
      {FOOTER_ICONS.map((item, index) => (
        <FooterIconBox key={index} page={item.page} currentPage={currentPage}>
          {item.icon}
          <p>{item.title}</p>
        </FooterIconBox>
      ))}
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.nav`
  height: 3.2rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;

  position: sticky;
  z-index: 100;
  bottom: 0;

  border-top: 0.1px solid ${({ theme }) => theme.colors.gray250};

  background-color: ${({ theme }) => theme.colors.gray50};
`;

const FooterIconBox = styled.div<FooterIconBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  color: ${(props) => (props.currentPage === props.page ? '#000' : '#868e96')};

  cursor: pointer;

  svg {
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
