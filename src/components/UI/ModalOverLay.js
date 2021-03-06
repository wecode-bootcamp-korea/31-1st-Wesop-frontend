import React, { useEffect } from 'react';
import './ModalOverLay.scss';

const ModalOverLay = ({ children, onCloseLoginModal, onCloseCartModal }) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const closeModal = () => {
    onCloseLoginModal();
    onCloseCartModal();
  };

  return (
    <div className="modalOverLay" onClick={closeModal}>
      {children}
    </div>
  );
};

export default ModalOverLay;
