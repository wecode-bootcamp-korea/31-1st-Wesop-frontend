import React from 'react';
import { BUTTON_TEXT } from './DATA/MESSAGE';
import './LoginSubmitBtn.scss';

const LoginSubmitBtn = ({ loginMode, onChangeLoginMode, inputValidity }) => {
  const { email, emailContainAt } = inputValidity;

  const goToReceivedPw = event => {
    if (email && emailContainAt) onChangeLoginMode('receivedPw');
  };

  return (
    <div className="loginSubmitBtn">
      {loginMode === 'resetPw' ? (
        <button type="button" onClick={goToReceivedPw}>
          {BUTTON_TEXT[loginMode]}
        </button>
      ) : (
        <button type="submit">{BUTTON_TEXT[loginMode]}</button>
      )}
    </div>
  );
};

export default LoginSubmitBtn;
