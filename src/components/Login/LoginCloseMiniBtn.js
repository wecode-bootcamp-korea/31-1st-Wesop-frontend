import React from 'react';
import './LoginCloseMiniBtn.scss';

const LoginCloseMiniBtn = ({ onCloseModal }) => {
  return (
    <button className="LoginCloseMiniBtn" type="button" onClick={onCloseModal}>
      <i className="fa-solid fa-xmark" />
    </button>
  );
};

export default LoginCloseMiniBtn;
