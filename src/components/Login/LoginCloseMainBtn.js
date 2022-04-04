import React from 'react';
import './LoginCloseMainBtn.scss';

const LoginCloseMainBtn = ({ onCloseModal }) => {
  return (
    <div className="loginCloseMainBtn">
      <button
        className="loginCloseMainBtn"
        type="button"
        onClick={onCloseModal}
      >
        닫기
      </button>
    </div>
  );
};

export default LoginCloseMainBtn;
