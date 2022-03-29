import React, { useState } from 'react';
import LoginErrorMsg from './LoginErrorMsg/LoginErrorMsg';
import { useNavigate } from 'react-router-dom';
import LoginMsg from './LoginMsg/LoginMsg';
import './Login.scss';

const Login = () => {
  // Main : 1 , Sign In : 2 , Sign up : 3 , Reset PW : 4
  const [loginMode, setLoginMode] = useState(2);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPw, setsEnteredPw] = useState('');

  const [isSubmit, setIsSubmit] = useState(false);
  const [isAtContain, setIsAtContain] = useState(true);

  const navigate = useNavigate();

  const goToMain = () => {
    setLoginMode(1);
  };

  const checkEmailInput = event => {
    enteredEmail.length === 0 || enteredEmail.includes('@')
      ? setIsAtContain(true)
      : setIsAtContain(false);
  };

  const userIdChangeHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const userPwChangeHandler = event => {
    setsEnteredPw(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    console.log('submit!');
  };

  const closeLoginModal = () => {
    navigate('/');
  };

  const backArrowBtn = (
    <button className="retrunLoginBtn" type="button" onClick={goToMain}>
      <i className="fa-solid fa-arrow-left-long" />
    </button>
  );

  const escapeBtn = (
    <button
      className="closeLoginModalBtn"
      type="button"
      onClick={closeLoginModal}
    >
      <i className="fa-solid fa-xmark" />
    </button>
  );

  const emailErrMsg = (
    <p className="idErrorMsg">유효한 이메일 주소를 입력해주세요.</p>
  );

  return (
    <div className="login">
      <div className="backdrop" onClick={closeLoginModal} />
      <form className="loginInner" onSubmit={submitHandler}>
        <section className="loginWindowBtnArea">
          {loginMode === 1 ? '' : backArrowBtn}
          {escapeBtn}
        </section>

        <section className="loginMsgArea">
          <LoginMsg />
          <LoginErrorMsg />
        </section>

        <section className="loginInsertArea">
          <input
            type="email"
            onChange={userIdChangeHandler}
            onBlur={checkEmailInput}
          />
          {isAtContain ? '' : emailErrMsg}
          <button type="submit">계속</button>
        </section>
      </form>
    </div>
  );
};

export default Login;
