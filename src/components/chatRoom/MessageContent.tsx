import styled from 'styled-components';
import ProfileImageBox from '../common/ProfileImageBox';

interface MessageContentProps {
  messageType: boolean;
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
        {messageType && <ProfileImageBox size="2.3rem" />}
        <MessageContentBox>
          {messageType ? (
            <>
              <ChatPartner>어준혁</ChatPartner>
              <ContentTime>
                <Content messageType={messageType}>{content}</Content>
                <MessageTime messageType={messageType}>{time}</MessageTime>
              </ContentTime>
            </>
          ) : (
            <ContentTime>
              <MessageTime messageType={messageType}>{time}</MessageTime>
              <Content messageType={messageType}>{content}</Content>
            </ContentTime>
          )}
        </MessageContentBox>
      </MessageBox>
    </MessageContentWrapper>
  );
};

export default MessageContent;

const MessageContentWrapper = styled.div<{ messageType: boolean }>`
  width: 100%;

  display: flex;
  justify-content: ${(props) =>
    props.messageType ? 'flex-start' : 'flex-end'};
`;

const MessageBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const MessageContentBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.3rem;
`;

const Content = styled.div<{ messageType: boolean }>`
  max-width: 14rem;
  padding: 0.6rem 0.7rem;

  font-size: ${({ theme }) => theme.fontSize.sm};

  border-radius: 1rem;
  background-color: ${(props) => (props.messageType ? '#ffff' : '#EEDB11')};
`;

const MessageTime = styled.div<{ messageType: boolean }>`
  font-size: 0.875rem;

  color: ${({ theme }) => theme.colors.gray400};
  font-size: ${({ theme }) => theme.fontSize.sm};

  display: flex;
  justify-content: ${(props) =>
    props.messageType ? 'flex-end' : 'flex-start'};
`;

const ChatPartner = styled.p`
  color: ${({ theme }) => theme.colors.gray400};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const ContentTime = styled.div`
  width: fit-content;

  display: flex;
  align-items: flex-end;

  gap: 0.3rem;
`;
