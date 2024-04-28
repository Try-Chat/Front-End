import styled from 'styled-components';
// 친구 페이지
import { FiSearch } from 'react-icons/fi';
import { FiUserPlus } from 'react-icons/fi';
import { PiMusicNotes } from 'react-icons/pi';
// 채팅 페이지
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2';
// // 오픈 채팅
// import { IoChatbubblesOutline } from 'react-icons/io5';
// // 쇼핑
// import { HiOutlineShoppingBag } from 'react-icons/hi';
// 공통
import { BsGear } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import { ReactElement, ReactNode } from 'react';

// import { MdKeyboardArrowRight } from 'react-icons/md';
// import { MdKeyboardArrowUp } from 'react-icons/md';
// import { MdKeyboardArrowDown } from 'react-icons/md';

interface HeaderIcons {
  [key: string]: { icon: ReactElement }[];
}

const HEADER_ICONS: HeaderIcons = {
  friend: [
    { icon: <FiSearch /> },
    { icon: <FiUserPlus /> },
    { icon: <PiMusicNotes /> },
  ],
  chatroomlist: [
    { icon: <FiSearch /> },
    { icon: <HiOutlineChatBubbleOvalLeft /> },
  ],
};

const Header = ({ children }: { children?: ReactNode }) => {
  const location = useLocation().pathname;
  const currentPage = location === '/' ? 'friend' : location.replace(/\//g, '');
  const headerIcons = HEADER_ICONS[currentPage];

  return (
    <HeaderWrapper>
      <HeaderLeftBox>{children}</HeaderLeftBox>
      <HeaderRightBox>
        {headerIcons.map((item, index) => (
          <HeaderIcon key={index}>{item.icon}</HeaderIcon>
        ))}
        <HeaderIcon>
          <BsGear />
        </HeaderIcon>
      </HeaderRightBox>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  height: 3rem;

  display: flex;
  justify-content: space-between;

  background-color: #ffff;

  z-index: 100;
  top: 0;
  position: sticky;

  margin: 0 1rem;
`;

const HeaderLeftBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  font-size: ${({ theme }) => theme.fontSize.lg};
`;

const HeaderRightBox = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 1rem;
`;

const HeaderIcon = styled.li`
  display: flex;
  align-items: center;
  svg {
    font-size: ${({ theme }) => theme.fontSize.lg};

    cursor: pointer;
  }
`;
