import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginMsg from './LoginMsg/LoginMsg';
import LoginTopBtn from './LoginTopBtn/LoginTopBtn';
import LoginMain from './LoginMain/LoginMain';
import LoginSignIn from './LoginSignIn/LoginSignIn';
import LoginSignUp from './LoginSignUp/LoginSignUp';
import LoginResetPw from './LoginResetPw/LoginResetPw';
import LoginSendedPw from './LoginSendedPw/LoginSendedPw';

import './Login.scss';

const Login = () => {
  // Main : 1 , Sign In : 2 , Sign up : 3
  // Reset PW : 4 , Sended Pw: 5
  const [loginMode, setLoginMode] = useState(1);

  const navigate = useNavigate();

  const changeLoginModeHandler = number => {
    setLoginMode(number);
  };

  const closeLoginModalHandler = () => {
    navigate('/');
  };

  return (
    <div className="login">
      <div className="backdrop" onClick={closeLoginModalHandler} />
      <div className="loginBody">
        <LoginTopBtn
          loginMode={loginMode}
          onChangeMode={changeLoginModeHandler}
          onCloseModal={closeLoginModalHandler}
        />
        <LoginMsg loginMode={loginMode} />
        {loginMode === 1 && <LoginMain onChangeMode={changeLoginModeHandler} />}
        {loginMode === 2 && <LoginSignIn />}
        {loginMode === 3 && <LoginSignUp />}
        {loginMode === 4 && (
          <LoginResetPw onChangeMode={changeLoginModeHandler} />
        )}
        {loginMode === 5 && (
          <LoginSendedPw onCloseModal={closeLoginModalHandler} />
        )}
      </div>
    </div>
  );
};

export default Login;
