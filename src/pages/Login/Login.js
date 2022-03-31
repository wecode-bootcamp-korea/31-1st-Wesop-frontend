import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import LoginCard from '../../components/Login/LoginCard';
import LoginForm from './LoginForm';
import './Login.scss';

const Login = () => {
  // main , signUp , signIn, resetPw
  // TODO: 테스트 끝나면 한줄만 남기고 제거
  // const [loginMode, setLoginMode] = useState('main');
  const [loginMode, setLoginMode] = useState('signUp');
  // const [loginMode, setLoginMode] = useState('signIn');
  // const [loginMode, setLoginMode] = useState('resetPw');
  // const [loginMode, setLoginMode] = useState('receivedPw');
  const navigate = useNavigate();

  const changeLoginModeHandler = type => {
    setLoginMode(type);
  };

  const closeModalHandler = () => {
    navigate('/');
    // TODO: 나갈시에 유저정보 state다 리셋해주는거 넣어야됨.
  };

  const insertLoginForm = dataName => {
    return (
      <LoginForm
        formData={dataName}
        onChangeLoginMode={changeLoginModeHandler}
        onCloseModal={closeModalHandler}
        loginMode={loginMode}
      />
    );
  };
  const FIRSTWINDOW_DATA = [
    { infoType: 'email', inputType: 'email', string: '이메일 주소' },
  ];

  const SIGNIN_DATA = [
    { infoType: 'email', inputType: 'email', string: '이메일 주소' },
    { infoType: 'password', inputType: 'password', string: '패스워드' },
  ];

  const SIGNUP_DATA = [
    { infoType: 'email', inputType: 'email', string: '이메일 주소' },
    { infoType: 'password', inputType: 'password', string: '패스워드' },
    { infoType: 'rePassword', inputType: 'password', string: '패스워드 확인' },
    { infoType: 'lastName', inputType: 'text', string: '성' },
    { infoType: 'firstName', inputType: 'text', string: '이름' },
  ];

  const RESETPW_DATA = [{ id: 1, type: 'email', text: '이메일 주소' }];

  return (
    <div className="login">
      <div className="backdrop" onClick={closeModalHandler} />
      <LoginCard className="loginInner">
        {loginMode === 'main' && insertLoginForm(FIRSTWINDOW_DATA)}
        {loginMode === 'signIn' && insertLoginForm(SIGNIN_DATA)}
        {loginMode === 'signUp' && insertLoginForm(SIGNUP_DATA)}
        {loginMode === 'resetPw' && insertLoginForm(RESETPW_DATA)}
        {loginMode === 'receivedPw' && insertLoginForm([])}
      </LoginCard>
      <Main className="backMain" />
    </div>
  );
};

export default Login;
