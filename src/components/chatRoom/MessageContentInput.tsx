import styled from 'styled-components';
import { FaRegSmile } from 'react-icons/fa';
import { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiHashtag } from 'react-icons/hi2';

interface messagesTpye {
  messageType: boolean;
  content: string;
  time: string;
}
interface MessageContentInputProps {
  allMessage: messagesTpye[];
  setAllMessage: (newMessage: messagesTpye[]) => void;
}

const MessageContentInput = ({
  allMessage,
  setAllMessage,
}: MessageContentInputProps) => {
  const [message, setMessage] = useState('');

  const handleSendButtonClick = () => {
    const newMessage = {
      messageType: false,
      content: message,
      time: '오전 4:30',
    };

    setAllMessage([...allMessage, newMessage]);
    setMessage('');
  };
  return (
    <MessageContentInputWrapper>
      <PlusIcon />
      <MessageInputBox>
        <MessageInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <IconBox>
          <FaRegSmile />
          <HiHashtag />
          {message.trim() === '' ? null : (
            <SendButton type="button" onClick={handleSendButtonClick}>
              <StyledArrowForward />
            </SendButton>
          )}
        </IconBox>
      </MessageInputBox>
    </MessageContentInputWrapper>
  );
};

export default MessageContentInput;

const MessageContentInputWrapper = styled.div`
  width: 100%;
  height: 3.5rem;

  padding: 0.3rem 0.3rem 0.8rem 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  background-color: #fff;

  svg {
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.gray300};
    cursor: pointer;
  }
`;

const MessageInputBox = styled.div`
  display: flex;
  flex: 1;
  border-radius: 1rem;
  padding-left: 0.2rem;
  height: 98%;
`;

const MessageInput = styled.input`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.base};

  padding: 0 0.5rem;
  border: 1px solid #dee2e6;
  border-right: none;
  outline: none;

  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: 1rem 0 0 1rem;

  caret-color: #4c6ef5;
`;

const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: #eedb11;
  padding: 0.3rem;
`;

const StyledArrowForward = styled(FaArrowUp)`
  font-size: ${({ theme }) => theme.fontSize.md} !important;
  color: #000 !important;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  background-color: ${({ theme }) => theme.colors.gray50};

  padding-right: 0.3rem;

  border: 1px solid #dee2e6;
  border-radius: 0 1rem 1rem 0;
  border-left: none;
`;

const PlusIcon = styled(AiOutlinePlus)`
  font-size: 1.6rem !important;
`;
