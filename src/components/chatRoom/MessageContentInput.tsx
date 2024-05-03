import { styled } from '@mui/material';
import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';
import getTime from '../../utils/getTime';

interface messagesType {
  messageType: boolean;
  content: string;
  time: string;
}
interface MessageContentInputProps {
  setAllMessage: React.Dispatch<React.SetStateAction<messagesType[]>>;
}

const MessageContentInput = ({ setAllMessage }: MessageContentInputProps) => {
  const [message, setMessage] = useState('');

  const handleSendButtonClick = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const newMessage = {
        messageType: false,
        content: message,
        time: getTime(),
      };
      console.log(newMessage.time);
      setAllMessage((prev) => [...prev, newMessage]);
      setMessage('');
    }
  };
  return (
    <MessageContentInputWrapper>
      <MessageInputBox>
        <MessageInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleSendButtonClick}
        />
        {message.trim() === '' ? null : (
          <SendButton type="button">
            <StyledArrowForward />
          </SendButton>
        )}
      </MessageInputBox>
    </MessageContentInputWrapper>
  );
};

export default MessageContentInput;

const MessageContentInputWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  height: '3.5rem',

  padding: '0.4rem 0.5rem',

  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',

  backgroundColor: '#fff',

  svg: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.grey[300],
  },
}));

const MessageInputBox = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '98%',

  borderRadius: '1.5rem',
  border: '1px solid #dee2e6',

  padding: '0.2rem 0.5rem',
  backgroundColor: theme.palette.grey[50],
}));

const MessageInput = styled('input')(({ theme }) => ({
  flex: 1,

  fontSize: theme.typography.subtitle2.fontSize,

  border: 'none',
  outline: 'none',

  borderRadius: '1rem',

  caretColor: '#4c6ef5',
  backgroundColor: theme.palette.grey[50],
}));

const SendButton = styled('button')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: '50%',
  backgroundColor: '#eedb11',

  width: '2.1rem',
});

const StyledArrowForward = styled(FaArrowUp)(({ theme }) => ({
  fontSize: `${theme.typography.subtitle1.fontSize} !important`,
  color: '#000 !important',
}));
