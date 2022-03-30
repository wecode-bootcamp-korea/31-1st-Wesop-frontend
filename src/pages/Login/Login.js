import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginCard from '../../components/Login/LoginCard';
import LoginForm from './LoginForm';

import './Login.scss';

const Login = () => {
  // main , signUp , signIn, resetPw
  const [loginMode, setLoginMode] = useState('main');

  const navigate = useNavigate();

  const changeLoginModeHandler = type => {
    setLoginMode(type);
  };

  const closeModalHandler = () => {
    navigate('/');
    // TODO: 나갈시에 유저정보 state다 리셋해주는거 넣어야됨.
  };

  const FIRSTWINDOW_DATA = [{ type: 'email', text: '"이메일 주소' }];

  const SIGNIN_DATA = [
    { type: 'email', text: '"이메일 주소' },
    { type: 'password', text: '패스워드' },
  ];

  const SIGNUP_DATA = [
    { type: 'email', text: '"이메일 주소' },
    { type: 'password', text: '패스워드' },
    { type: 'confirmPassword', text: '패스워드 확인' },
    { type: 'lastName', text: '성' },
    { type: 'firstName', text: '이름' },
  ];

  const RESETPW_DATA = [{ type: 'email', text: '"이메일 주소' }];

  return (
    <div className="login">
      <div className="backdrop" onClick={closeModalHandler} />
      <LoginCard className="loginInner">
        {loginMode === 'main' && (
          <LoginForm
            type="main"
            formData={FIRSTWINDOW_DATA}
            onChangeMode={changeLoginModeHandler}
          />
        )}
        {loginMode === 'signIn' && (
          <LoginForm
            type="signIn"
            formData={SIGNIN_DATA}
            onChangeMode={changeLoginModeHandler}
          />
        )}
        {loginMode === 'signUp' && (
          <LoginForm
            type="signUp"
            formData={SIGNUP_DATA}
            onChangeMode={changeLoginModeHandler}
          />
        )}
        {loginMode === 'resetPw' && (
          <LoginForm
            type="resetPw"
            formData={RESETPW_DATA}
            onChangeMode={changeLoginModeHandler}
          />
        )}
      </LoginCard>
    </div>
  );
};

export default Login;
