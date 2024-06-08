import { useState } from 'react';

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

  return { isModal, handleModalOpen, handleModalClose, isClosing };
};

export default useModal;
