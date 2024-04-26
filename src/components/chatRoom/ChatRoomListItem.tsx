import styled from 'styled-components';

interface ChatRoomListItemProps {
  chatRoomName: string;
  chatRoomImage: string;
  lastMessage: string;
  lastMessageTime: string;
}

const ChatRoomListItem = ({
  chatRoomName,
  chatRoomImage,
  lastMessage,
  lastMessageTime,
}: ChatRoomListItemProps) => {
  return (
    <ChatRoomListItemWrapper>
      <ChatRoomItemLeftBox>
        <ChatRoomPhoto src={chatRoomImage} alt="user_photo" />
        <div>
          <ChatRoomName>{chatRoomName}</ChatRoomName>
          <LastMessage>{lastMessage}</LastMessage>
        </div>
      </ChatRoomItemLeftBox>
      <div>
        <LastMessageTime>{lastMessageTime}</LastMessageTime>
      </div>
    </ChatRoomListItemWrapper>
  );
};

export default ChatRoomListItem;

const ChatRoomListItemWrapper = styled.div`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  padding: 0 0.7rem;

  cursor: pointer;

  &:hover {
    background-color: #f5f6fe;
    transition: 0.2s;
  }
`;

const ChatRoomItemLeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ChatRoomPhoto = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 0.5rem;
`;

const ChatRoomName = styled.p`
  font-size: 0.85rem;
`;

const LastMessage = styled.p`
  font-size: 0.7rem;
  color: #b3b3b3;
`;

const LastMessageTime = styled.p`
  font-size: 0.8rem;
  color: #b3b3b3;
`;
