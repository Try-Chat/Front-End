import { Modal as MuiModal, keyframes, styled } from '@mui/material';
import { ReactNode } from 'react';

interface ModalLayoutProps {
  children: ReactNode;
  isModal: boolean;
  isClosing: boolean;
  animation?: boolean;
  onClose: VoidFunction;
}

const ModalLayout = ({
  isModal,
  children,
  onClose,
  isClosing,
  animation,
}: ModalLayoutProps) => {
  return (
    <MuiModalWrapper
      open={isModal}
      onClose={onClose}
      $isClosing={isClosing}
      $animation={animation}>
      <ModalWrapper>{children}</ModalWrapper>
    </MuiModalWrapper>
  );
};

export default ModalLayout;

const fadeOut = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

const MuiModalWrapper = styled(MuiModal)<{
  $isClosing: boolean;
  $animation?: boolean;
}>(({ $animation, $isClosing }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  animation: $animation
    ? 'none'
    : $isClosing
      ? `${fadeIn} 0.225s ease-in-out`
      : `${fadeOut} 0.225s ease-in-out`,
}));

const ModalWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});
