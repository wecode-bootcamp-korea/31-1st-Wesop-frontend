import React, { useState } from 'react';
import LoginCard from '../../components/Login/LoginCard';
import LoginForm from './LoginForm';
import FIRSTWINDOW_DATA from '../../components/Login/LOGIN_DATA/FIRSTWINDOW_DATA';
import RESETPW_DATA from '../../components/Login/LOGIN_DATA/RESETPW_DATA';
import SIGNIN_DATA from '../../components/Login/LOGIN_DATA/SIGNIN_DATA';
import SIGNUP_DATA from '../../components/Login/LOGIN_DATA/SIGNUP_DATA';
import './Login.scss';

const Login = () => {
  // 로그인모드 종류 = [main , signUp , signIn, resetPw, receivedPw]
  const [loginMode, setLoginMode] = useState('signUp');
  const [isShowModal, setIsShowModal] = useState('true');

  const changeLoginModeHandler = type => {
    setLoginMode(type);
  };
  const closeModalHandler = () => {
    setIsShowModal(isShowModal ? false : true);
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
  return (
    <div className="login">
      <div
        className={`backdrop ${isShowModal ? '' : 'hideModal'}`}
        onClick={closeModalHandler}
      />
      <LoginCard className={`loginInner ${isShowModal ? '' : 'hideModal'}`}>
        {loginMode === 'main' && insertLoginForm(FIRSTWINDOW_DATA)}
        {loginMode === 'signIn' && insertLoginForm(SIGNIN_DATA)}
        {loginMode === 'signUp' && insertLoginForm(SIGNUP_DATA)}
        {loginMode === 'resetPw' && insertLoginForm(RESETPW_DATA)}
        {loginMode === 'receivedPw' && insertLoginForm([])}
      </LoginCard>
    </div>
  );
};

export default Login;
