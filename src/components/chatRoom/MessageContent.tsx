import styled from 'styled-components';
import defaultImg from '../../assets/images/defaultImg.jpg';

interface MessageContentProps {
  messageType?: 'received';
  content: string;
  time: string;
}

const MessageContent = ({
  messageType,
  content,
  time,
}: MessageContentProps) => {
  return (
    <MessageContentWrapper messageType={messageType}>
      <MessageBox>
        {messageType && <ChatPartnerPhoto src={defaultImg} />}
        <MessageContentBox>
          {messageType && <ChatPartner>어준혁</ChatPartner>}
          <Content messageType={messageType}>{content}</Content>
          <MessageTime messageType={messageType}>{time}</MessageTime>
        </MessageContentBox>
      </MessageBox>
    </MessageContentWrapper>
  );
};

export default MessageContent;

const MessageContentWrapper = styled.div<{ messageType?: 'received' }>`
  width: 100%;

  display: flex;
  justify-content: ${(props) =>
    props.messageType === 'received' ? 'flex-start' : 'flex-end'};
`;

const MessageBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const MessageContentBox = styled.div`
  width: 15rem;

  display: flex;
  flex-direction: column;

  gap: 0.3rem;
`;

const Content = styled.div<{ messageType?: 'received' }>`
  padding: 0.65rem 0.93rem;

  border-radius: ${(props) =>
    props.messageType === 'received'
      ? '0 0.625rem 0.625rem 0.625rem'
      : '0.625rem 0 0.625rem 0.625rem'};

  background-color: ${(props) =>
    props.messageType === 'received' ? '#F1F7FF' : '#4629f2'};
  color: ${(props) => (props.messageType === 'received' ? '#000' : '#fff')};
`;

const MessageTime = styled.div<{ messageType?: 'received' }>`
  width: 100%;
  font-size: 0.875rem;
  color: #dee2e6;

  display: flex;
  justify-content: ${(props) =>
    props.messageType === 'received' ? 'flex-end' : 'flex-start'};
`;

const ChatPartner = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
`;

const ChatPartnerPhoto = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 0.5rem;
`;
