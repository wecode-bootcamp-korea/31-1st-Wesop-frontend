import React from 'react';
import './LoginBackMiniBtn.scss';

const LoginBackMiniBtn = ({ onChangeLoginMode, onClearUserInfo }) => {
  const goToMain = () => {
    onClearUserInfo();
    onChangeLoginMode('main');
  };

  return (
    <button className="LoginBackMiniBtn" type="button" onClick={goToMain}>
      <i className="fa-solid fa-arrow-left-long" />
    </button>
  );
};

export default LoginBackMiniBtn;
