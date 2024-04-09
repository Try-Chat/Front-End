import styled from 'styled-components';
import { IoArrowBackOutline } from 'react-icons/io5';
import { IoIosMore } from 'react-icons/io';
import { MessageContent, MessageContentInput } from '../components';

const ChatRoom = () => {
  return (
    <ChatRoomWrapper>
      <ChatRoomHeader>
        <IoArrowBackOutline />
        <p>채팅방 이름</p>
        <IoIosMore />
      </ChatRoomHeader>
      <MessageBox>
        <MessageContent
          messageType="received"
          content="I have a question about the return policy for a product I purchased."
          time="08:17 AM"
        />
        <MessageContent
          content="I have a question about the return policy for a product I purchased."
          time="08:17 AM"
        />
      </MessageBox>
      <MessageContentInput />
    </ChatRoomWrapper>
  );
};

export default ChatRoom;

const ChatRoomWrapper = styled.div`
  width: 360px;

  display: flex;
  flex-direction: column;
`;

const ChatRoomHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 4.25rem;

  padding: 0 1.2rem;

  font-size: 1.2rem;

  border-bottom: 1px solid #dee2e6;

  p {
    font-size: 0.875rem;
    font-weight: bold;
  }

  svg {
    cursor: pointer;
    color: #666668;
  }
`;

const MessageBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.3rem;

  padding: 1rem 1.2rem;

  overflow-y: auto;
`;
