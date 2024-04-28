import styled from 'styled-components';
import ProfileImageBox from '../common/ProfileImageBox';

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
  return (
    <ChatRoomListItemWrapper>
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

const ChatRoomListItemWrapper = styled.li`
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  margin: 0 1rem;

  cursor: pointer;
`;

const ChatRoomItemLeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ChatRoomItemMidBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const ChatRoomItemRightBox = styled.div`
  height: 100%;

  margin-top: 1.2rem;

  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const ChatRoomName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const LastMessage = styled.p`
  font-size: 0.7rem;
  color: #b3b3b3;
`;

const LastMessageTime = styled.p`
  font-size: 0.8rem;
  color: #b3b3b3;
`;
