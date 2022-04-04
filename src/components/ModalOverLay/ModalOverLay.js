import React from 'react';
import './ModalOverLay.scss';

const ModalOverLay = ({ children }) => {
  return (
    <div
      className="modalOverLay"
      // onClick={(closeModalHandler, clearUserStateHandler)}>ß
    >
      {children}
    </div>
  );
};

export default ModalOverLay;
