import React from 'react';
import './ModalOverLay.scss';

const ModalOverLay = ({ children }) => {
  return (
    <div
      className="modalOverLay"
      // TODO: 모달창 바깥부분 눌렀을때 모달창이 닫힐수 있게 onClick 이벤트 설정해주시면 됩니다.
    >
      {children}
    </div>
  );
};

export default ModalOverLay;
