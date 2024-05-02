import ProfileImageBox from '../common/ProfileImageBox';
import { useNavigate } from 'react-router-dom';
import { Typography, styled } from '@mui/material';

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
          <Typography variant="h3">{chatRoomName}</Typography>
          <Typography variant="body1">{lastMessage}</Typography>
        </ChatRoomItemMidBox>
      </ChatRoomItemLeftBox>
      <ChatRoomItemRightBox>
        <Typography variant="body1">{lastMessageTime}</Typography>
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
  gap: '1rem',

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
  gap: '0.3rem',
});

const ChatRoomItemRightBox = styled('div')({
  height: '100%',

  marginTop: '1.2rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
});
