import styled from 'styled-components';
import { FaRegSmile } from 'react-icons/fa';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const MessageContentInput = () => {
  const [message, setMessage] = useState('');

  return (
    <MessageContentInputWrapper>
      <FaRegSmile />
      <MessageInput value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Reply..." />
      <StyeldPhoto />
      <SendButton type="button">
        <StyledArrowForward />
      </SendButton>
    </MessageContentInputWrapper>
  );
};

export default MessageContentInput;

const MessageContentInputWrapper = styled.div`
  width: 100%;
  height: 4rem;

  padding: 0.8rem 1.2rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  border-top: 1px solid #dee2e6;

  svg {
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

const StyeldPhoto = styled(HiOutlinePhotograph)`
  color: #a6a6a6;
`;

const MessageInput = styled.input`
  flex: 1;
  font-size: 1rem;

  padding-bottom: 0.2rem;
`;

const SendButton = styled.button`
  width: 2.5rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: #4629f2;
`;

const StyledArrowForward = styled(IoIosArrowForward)`
  font-size: 1.2rem;

  color: #ffff;
`;
