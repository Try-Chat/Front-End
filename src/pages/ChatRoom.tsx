import { MessageContent, MessageContentInput } from '../components';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';
import { styled } from '@mui/material';
import { display, height, margin, padding, width } from '@mui/system';
import { BsJustify } from 'react-icons/bs';
import zIndex from '@mui/material/styles/zIndex';

interface MessageType {
  messageType: boolean;
  content: string;
  time: string;
}

const MESSAGES: MessageType[] = [
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
            key={index}
            messageType={message.messageType}
            content={message.content}
            time={
              index === allMessage.length - 1 ||
              allMessage[index + 1].time !== message.time
                ? message.time
                : null
            }
          />
        ))}
      </MessageBox>
      <MessageContentInput setAllMessage={setAllMessage} />
    </ChatRoomWrapper>
  );
};

export default ChatRoom;

const ChatRoomWrapper = styled('div')({
  width: '500px',
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',

  backgroundColor: '#abc1d1',
});

const ChatRoomHeader = styled('nav')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  height: '2.5rem',

  padding: '0 1rem',

  position: 'sticky',
  top: 0,
  backgroundColor: '#abc1d1',

  fontSize: theme.typography.subtitle2.fontSize,

  p: {
    fontSize: theme.typography.subtitle2.fontSize,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    paddingRight: '1.5rem',
  },

  svg: {
    width: '1.5rem',
    fontSize: theme.typography.subtitle1.fontSize,
  },
}));

const MessageBox = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '0.4rem',

  padding: '1rem 0.4rem 1rem 0.8rem',

  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '0.5rem',
  },

  '&::-webkit-scrollbar-thumb': {
    background: '#868e96',
    borderRadius: '5px',
    backgroundClip: 'padding-box',
    border: '3px solid transparent',
  },

  '&::-webkit-scrollbar-track': {
    background: '#abc1d1',
    borderRadius: '5px',
    margin: '3.5rem 0',
  },
});
