import styled from 'styled-components';
import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

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
        time: '오전 4:30',
      };

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

const MessageContentInputWrapper = styled.div`
  width: 100%;
  height: 3.5rem;

  padding: 0.4rem 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  background-color: #fff;

  svg {
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.gray300};
  }
`;

const MessageInputBox = styled.div`
  display: flex;
  width: 100%;
  height: 98%;

  border-radius: 1.5rem;
  border: 1px solid #dee2e6;

  padding: 0.2rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.gray50};
`;

const MessageInput = styled.input`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.base};

  border: none;
  outline: none;

  border-radius: 1rem;

  caret-color: #4c6ef5;
`;

const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: #eedb11;

  width: 2.1rem;
`;

const StyledArrowForward = styled(FaArrowUp)`
  font-size: ${({ theme }) => theme.fontSize.md} !important;
  color: #000 !important;
`;
