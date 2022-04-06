import React, { useEffect } from 'react';
import './ModalOverLay.scss';

const ModalOverLay = ({ children, onCloseLoginModal }) => {
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

  return (
    <div className="modalOverLay" onClick={onCloseLoginModal}>
      {children}
    </div>
  );
};

export default ModalOverLay;
