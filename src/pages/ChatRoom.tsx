import styled from 'styled-components';
import { MessageContent, MessageContentInput } from '../components';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';

const MESSAGES = [
  { messageType: true, content: '너무 졸려요', time: '오전 9:50' },
  { messageType: false, content: '면접 공부해야하는데', time: '오전 9:50' },
  { messageType: false, content: '졸려서 자야겠다', time: '오전 9:50' },
  { messageType: false, content: '수고요^^', time: '오전 9:50' },
];

const ChatRoom = () => {
  const navigate = useNavigate();
  const [allMessage, setAllMessage] = useState(MESSAGES);

  return (
    <ChatRoomWrapper>
      <ChatRoomHeader>
        <IoIosArrowBack onClick={() => navigate(-1)} />
        <p>채팅방 이름</p>
      </ChatRoomHeader>
      <MessageBox>
        {allMessage.map((message, index) => (
          <MessageContent
            key={index} // 수정 사항
            messageType={message.messageType}
            content={message.content}
            time={message.time}
          />
        ))}
      </MessageBox>
      <MessageContentInput setAllMessage={setAllMessage} />
    </ChatRoomWrapper>
  );
};

export default ChatRoom;

const ChatRoomWrapper = styled.div`
  width: 500px;

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
    padding-right: 1.5rem;
  }

  svg {
    width: 1.5rem;
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const MessageBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.4rem;

  padding: 1rem 0.8rem;

  overflow-y: auto;
`;
