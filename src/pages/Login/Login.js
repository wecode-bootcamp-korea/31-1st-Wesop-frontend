import React, { useState } from 'react';
import LoginCard from '../../components/Login/LoginCard';
import LoginForm from './LoginForm';
import {
  FIRSTWINDOW_DATA,
  RESETPW_DATA,
  SIGNIN_DATA,
  SIGNUP_DATA,
} from '../../components/Login/DATA/LOGIN_DATA';

import './Login.scss';

const Login = () => {
  const [loginMode, setLoginMode] = useState('main');

  const [userInfo, setUserInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    rePassword: '',
  });

  const [inputValidity, setInputValidity] = useState({
    email: false,
    firstName: false,
    lastName: false,
    password: false,
    rePassword: false,
    emailContainAt: false,
    samePassword: false,
  });

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
    // TODO: 여기서 상위 컴포넌트의 Login 관련한 State끄거 켤 수 있게 해야됩니다.
    // 여기서 작성하는게 아니라 그거 핸들러 받아서 이 이름으로 뿌리면 될 거 같습니다.
    // 이미 내부에다가 onCloseModal로 뿌려놔서 변수명은 안바꾸는게 좋습니다.
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
      <LoginCard>
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
