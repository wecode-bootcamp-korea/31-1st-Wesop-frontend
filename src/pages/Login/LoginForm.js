import React from 'react';
import LoginSubmitButton from '../../components/Login/LoginSubmitBtn';
import LoginInput from '../../components/Login/LoginInput';

const LoginForm = props => {
  return (
    <form className="loginForm">
      {/* LoginMessage */}
      <LoginInput />
      <LoginSubmitButton />
    </form>
  );
};

export default LoginForm;
