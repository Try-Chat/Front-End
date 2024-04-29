import { Banner, ChatRoomListItem, Footer } from '../components';
import { styled } from '@mui/system';
import Header from '../components/common/Header';
import { useNavigate } from 'react-router-dom';

const ChatRoomList = () => {
  const navigate = useNavigate();
  const handleChatRoomClick = () => {
    navigate('/chatroom');
  };

  return (
    <ChatRoomListWrapper>
      <Header>채팅</Header>
      <Banner />
      <ChatRoomListBox>
        <div onClick={() => handleChatRoomClick()}>
          <ChatRoomListItem
            chatRoomName="테오의 프론트엔드"
            lastMessage="레이아웃 작업중"
            lastMessageTime="오전 2:42"
          />
        </div>
        <ChatRoomListItem
          chatRoomName="테오의 프론트엔드"
          lastMessage="레이아웃 작업중"
          lastMessageTime="오전 1:07"
        />
      </ChatRoomListBox>
      <Footer />
    </ChatRoomListWrapper>
  );
};

export default ChatRoomList;

const ChatRoomListWrapper = styled('div')({
  width: '390px',

  backgroundColor: '#Ffff',
});

const ChatRoomListBox = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',

  paddingBottom: '4rem',
});
