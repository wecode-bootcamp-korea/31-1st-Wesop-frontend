import React from 'react';
import './LoginCloseMiniBtn.scss';

const LoginCloseMiniBtn = ({ onCloseModal, onClearUserInfo }) => {
  const closeModal = () => {
    onCloseModal();
    onClearUserInfo();
  };

  return (
    <button className="LoginCloseMiniBtn" type="button" onClick={closeModal}>
      <i className="fa-solid fa-xmark" />
    </button>
  );
};

export default LoginCloseMiniBtn;
