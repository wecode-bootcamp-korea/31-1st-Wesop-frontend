import React from 'react';
import './LoginSubmitBtn.scss';

const LoginSubmitBtn = ({ loginMode }) => {
  let buttonText = '';

  if (loginMode === 'main') {
    buttonText = '계속';
  } else if (loginMode === 'signIn') {
    buttonText = '로그인';
  } else if (loginMode === 'signUp') {
    buttonText = '등록';
  } else if (loginMode === 'resetPw') {
    buttonText = '보내기';
  } else if (loginMode === 'receivedPw') {
    buttonText = '닫기';
  } else {
    buttonText = '제출';
  }

  return (
    <div className="loginSubmitBtn">
      <button type="submit">{buttonText}</button>
    </div>
  );
};

export default LoginSubmitBtn;
