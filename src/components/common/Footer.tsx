import { styled } from '@mui/material';
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
      {FOOTER_ICONS.map(({ page, title, icon }) => (
        <FooterIconBox key={page} to={page} $currentPage={currentPage === page}>
          {icon}
          <p>{title}</p>
        </FooterIconBox>
      ))}
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled('nav')(({ theme }) => ({
  width: 'inherit',
  height: '4rem',

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  padding: '0.5rem',

  position: 'fixed',
  bottom: '0',

  borderTop: `0.1px solid ${theme.palette.grey[200]}`,
  backgroundColor: theme.palette.grey[50],
}));

const FooterIconBox = styled(Link)<{ $currentPage: boolean }>(
  ({ theme, $currentPage }) => ({
    width: '4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.4rem',

    backgroundColor: theme.palette.grey[50],
    color: $currentPage ? '#000' : '#868e96',

    textDecoration: 'none',

    svg: {
      fontSize: theme.typography.subtitle1.fontSize,
    },

    p: {
      fontSize: theme.typography.body2.fontSize,
    },
  }),
);
