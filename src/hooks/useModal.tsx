import { ReactNode, useState } from 'react';
import ModalLayout from '../components/modal/ModalLayout';

const useModal = () => {
  const [isModal, setIsModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleModalOpen = () => {
    setIsModal(true);
    setIsClosing(false);
  };

  const handleModalClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsModal(false);
    }, 226);
  };

  const Modal = ({ children }: { children: ReactNode }) => {
    return (
      <ModalLayout
        isModal={isModal}
        isClosing={isClosing}
        onClose={handleModalClose}>
        {children}
      </ModalLayout>
    );
  };
  return { isModal, handleModalOpen, handleModalClose, isClosing, Modal };
};

export default useModal;
