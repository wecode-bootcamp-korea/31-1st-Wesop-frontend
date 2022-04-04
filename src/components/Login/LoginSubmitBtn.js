import React from 'react';
import './LoginSubmitBtn.scss';

const LoginSubmitBtn = ({ loginMode, onChangeLoginMode, inputValidity }) => {
  const buttonText = {
    main: '계속',
    signIn: '로그인',
    signUp: '등록',
    resetPw: '보내기',
    receivedPw: '닫기',
  };

  const { email, emailContainAt } = inputValidity;

  const goToReceivedPw = event => {
    if (email && emailContainAt) onChangeLoginMode('receivedPw');
  };

  return (
    <div className="loginSubmitBtn">
      {loginMode === 'resetPw' ? (
        <button type="button" onClick={goToReceivedPw}>
          {buttonText[loginMode]}
        </button>
      ) : (
        <button type="submit">{buttonText[loginMode]}</button>
      )}
    </div>
  );
};

export default LoginSubmitBtn;
