import { styled } from '@mui/material';
import { Banner, ChatRoomListItem, Footer } from '../components';
import Header from '../components/common/Header';

const ChatRoomList = () => {
  return (
    <ChatRoomListWrapper>
      <Header>채팅</Header>
      <Banner />
      <ChatRoomListBox>
        <ChatRoomListItem
          chatRoomName="테오의 프론트엔드"
          lastMessage="레이아웃 작업중"
          lastMessageTime="오전 2:42"
        />
      </ChatRoomListBox>
      <Footer />
    </ChatRoomListWrapper>
  );
};

export default ChatRoomList;

const ChatRoomListWrapper = styled('div')({
  width: '500px',
  minHeight: '100vw',

  backgroundColor: '#Ffff',
});

const ChatRoomListBox = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',

  paddingBottom: '4rem',
});
