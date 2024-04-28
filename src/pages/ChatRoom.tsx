import styled from 'styled-components';
import { MessageContent, MessageContentInput } from '../components';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import { SlMenu } from 'react-icons/sl';
import { useState } from 'react';

interface messagesTpye {
  messageType: boolean;
  content: string;
  time: string;
}
const MESSAGES = [
  { messageType: true, content: '너무 졸려요', time: '오전 9:50' },
  { messageType: false, content: '면접 공부해야하는데', time: '오전 9:50' },
  { messageType: false, content: '졸려서 자야겠다', time: '오전 9:50' },
  { messageType: false, content: '수고요^^', time: '오전 9:50' },
];

const ChatRoom = () => {
  const navigate = useNavigate();
  const [allMessage, setAllMessage] = useState(MESSAGES);
  const handleSetAllMessage = (newMessages: messagesTpye[]) => {
    setAllMessage(newMessages);
  };
  return (
    <ChatRoomWrapper>
      <ChatRoomHeader>
        <IoIosArrowBack onClick={() => navigate(-1)} />
        <p>채팅방 이름</p>
        <ChatRoomHeaderRightBox>
          <FiSearch />
          <SlMenu />
        </ChatRoomHeaderRightBox>
      </ChatRoomHeader>
      <MessageBox>
        {allMessage.map((message, index) => (
          <MessageContent
            key={index}
            messageType={message.messageType}
            content={message.content}
            time={message.time}
          />
        ))}
      </MessageBox>
      <MessageContentInput
        allMessage={allMessage}
        setAllMessage={handleSetAllMessage}
      />
    </ChatRoomWrapper>
  );
};

export default ChatRoom;

const ChatRoomWrapper = styled.div`
  width: 390px;

  display: flex;
  flex-direction: column;

  background-color: #abc1d1;
`;

const ChatRoomHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 2.5rem;

  padding: 0 1rem;

  position: sticky;

  font-size: ${({ theme }) => theme.fontSize.base};

  p {
    font-size: ${({ theme }) => theme.fontSize.base};
    flex: 1;
    display: flex;
    justify-content: center;
    padding-left: 2.5rem;
  }

  svg {
    width: 1.5rem;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const ChatRoomHeaderRightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MessageBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.3rem;

  padding: 1rem 0.8rem;

  overflow-y: auto;
`;
