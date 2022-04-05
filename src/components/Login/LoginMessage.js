import React from 'react';
import { TITLE_MSG, CONTENT_MSG, ERROR_MSG } from './DATA/LOGIN_MESSAGE';
import './LoginMessage.scss';

const LoginMessage = ({ loginMode, loginError }) => {
  return (
    <div className="loginMessage">
      <p className="titleMessage">{TITLE_MSG[loginMode]}</p>
      <p className="contentMessage">{CONTENT_MSG[loginMode]}</p>
      <p className="loginErrorMessage">{ERROR_MSG[loginError]}</p>
    </div>
  );
};

export default LoginMessage;
