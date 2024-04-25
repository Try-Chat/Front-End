import styled from 'styled-components';
// 친구 페이지
import { FiSearch } from 'react-icons/fi';
import { FiUserPlus } from 'react-icons/fi';
import { PiMusicNotes } from 'react-icons/pi';
// 채팅 페이지
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2';
// 오픈 채팅
import { IoChatbubblesOutline } from 'react-icons/io5';
// 쇼핑
import { HiOutlineShoppingBag } from 'react-icons/hi';
// 공통
import { BsGear } from 'react-icons/bs';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLeftBox>친구</HeaderLeftBox>
      <HeaderRightBox>
        <HeaderIcon>
          <FiSearch />
        </HeaderIcon>
        <HeaderIcon>
          <FiUserPlus />
        </HeaderIcon>
        <HeaderIcon>
          <PiMusicNotes />
        </HeaderIcon>
        <HeaderIcon>
          <BsGear />
        </HeaderIcon>
      </HeaderRightBox>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 3rem;

  display: flex;
  justify-content: space-between;

  background-color: #ffff;

  z-index: 100;
  top: 0;
  position: sticky;
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
  }
`;
