import ProfileImageBox from '../common/ProfileImageBox';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material';

interface ChatRoomListItemProps {
  chatRoomName: string;
  lastMessage: string;
  lastMessageTime: string;
}

const ChatRoomListItem = ({
  chatRoomName,
  lastMessage,
  lastMessageTime,
}: ChatRoomListItemProps) => {
  const navigate = useNavigate();
  const handleChatRoomClick = () => {
    navigate('/chatroom');
  };
  return (
    <ChatRoomListItemWrapper onClick={handleChatRoomClick}>
      <ChatRoomItemLeftBox>
        <ProfileImageBox size="2.7rem" />
        <ChatRoomItemMidBox>
          <ChatRoomName>{chatRoomName}</ChatRoomName>
          <LastMessage>{lastMessage}</LastMessage>
        </ChatRoomItemMidBox>
      </ChatRoomItemLeftBox>
      <ChatRoomItemRightBox>
        <LastMessageTime>{lastMessageTime}</LastMessageTime>
      </ChatRoomItemRightBox>
    </ChatRoomListItemWrapper>
  );
};

export default ChatRoomListItem;

const ChatRoomListItemWrapper = styled('li')({
  height: '3rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.4rem',

  margin: '0 1rem',
});

const ChatRoomItemLeftBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

const ChatRoomItemMidBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const ChatRoomItemRightBox = styled('div')({
  height: '100%',

  marginTop: '1.2rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
});

const ChatRoomName = styled('p')(({ theme }) => ({
  fontSize: theme.typography.subtitle2.fontSize,
}));

const LastMessage = styled('p')({
  fontSize: '0.7rem',
  color: '#b3b3b3',
});

const LastMessageTime = styled('p')({
  fontSize: '0.8rem',
  color: '#b3b3b3',
});
