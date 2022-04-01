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
  const [loginMode, setLoginMode] = useState('main');
  const [isShowModal, setIsShowModal] = useState('true');

  const [userInfo, setUserInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    rePassword: '',
  });

  console.log(userInfo);

  const [inputValidity, setInputValidity] = useState({
    email: false,
    firstName: false,
    lastName: false,
    password: false,
    rePassword: false,
    emailContainAt: false,
    samePassword: false,
  });

  console.log(inputValidity);

  const clearUserStateHandler = () => {
    setUserInfo({
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      rePassword: '',
    });
  };

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
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        onClearUserInfo={clearUserStateHandler}
        inputValidity={inputValidity}
        onSetInputValidity={setInputValidity}
      />
    );
  };

  return (
    <div className="login">
      <div
        // 부모 컴포넌트랑 연결시에는 그냥 부모 컴포넌트에서 state파서 삼항연산자로 토글 만들면 됨.
        // className="backdrop"
        className={`backdrop ${isShowModal ? '' : 'hideModal'}`}
        onClick={(closeModalHandler, clearUserStateHandler)}
      />
      {/* <LoginCard className="loginInner"> */}
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
