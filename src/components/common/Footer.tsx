import { styled } from '@mui/material';
import { FaUser } from 'react-icons/fa6';
import { IoChatbubbleSharp } from 'react-icons/io5';
import { Link, useLocation, useParams } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const { id } = useParams() as { id: string };
  const currentPage = location.pathname;

  return (
    <FooterWrapper>
      <FooterIconBox
        to={`/friend/${id}`}
        $currentPage={currentPage === `/friend/${id}`}>
        <FaUser />
        <p>친구</p>
      </FooterIconBox>
      <FooterIconBox
        to={`/chatroomlist/${id}`}
        $currentPage={currentPage === `/chatroomlist/${id}`}>
        <IoChatbubbleSharp />
        <p>채팅</p>
      </FooterIconBox>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled('nav')(({ theme }) => ({
  width: 'inherit',
  height: '4rem',

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-evenly',
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
    color: $currentPage ? '#000' : theme.palette.grey[400],

    textDecoration: 'none',

    svg: {
      fontSize: theme.typography.subtitle1.fontSize,
    },

    p: {
      fontSize: theme.typography.body2.fontSize,
    },
  }),
);
