import { styled } from '@mui/material';
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

const MessageContentWrapper = styled('div')<{ messageType: boolean }>(
  ({ messageType }) => ({
    width: '100%',

    display: 'flex',
    justifyContent: messageType ? 'flex-start' : 'flex-end',
  }),
);

const MessageBox = styled('div')({
  display: 'flex',
  gap: '0.5rem',
});

const MessageContentBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',
});

const Content = styled('div')<{ messageType: boolean }>(
  ({ theme, messageType }) => ({
    maxWidth: '14rem',
    padding: '0.6rem 0.7rem',

    fontSize: theme.typography.body1.fontSize,

    borderRadius: '1rem',
    backgroundColor: messageType ? '#ffff' : '#EEDB11',
  }),
);

const MessageTime = styled('div')<{ messageType: boolean }>(
  ({ theme, messageType }) => ({
    color: theme.palette.grey[500],
    fontSize: theme.typography.body1.fontSize,

    display: 'flex',
    justifyContent: messageType ? 'flex-end' : 'flex-start',
  }),
);

const ChatPartner = styled('p')(({ theme }) => ({
  color: theme.palette.grey[500],
  fontSize: theme.typography.body1.fontSize,
}));

const ContentTime = styled('div')({
  width: 'fit-content',

  display: 'flex',
  alignItems: 'flex-end',

  gap: '0.3rem',
});
