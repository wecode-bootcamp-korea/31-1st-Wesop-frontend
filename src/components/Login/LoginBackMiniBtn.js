import React from 'react';
import './LoginBackMiniBtn.scss';

const LoginBackMiniBtn = ({ onChangeLoginMode }) => {
  const goToMain = () => {
    onChangeLoginMode('main');
  };

  return (
    <button className="LoginBackMiniBtn" type="button" onClick={goToMain}>
      <i className="fa-solid fa-arrow-left-long" />
    </button>
  );
};

export default LoginBackMiniBtn;
