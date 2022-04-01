import React, { useState } from 'react';
import LoginMessage from '../../components/Login/LoginMessage';
import LoginSubmitButton from '../../components/Login/LoginSubmitBtn';
import LoginInput from '../../components/Login/LoginInput';
import LoginCloseMiniBtn from '../../components/Login/LoginCloseMiniBtn';
import LoginBackMiniBtn from '../../components/Login/LoginBackMiniBtn';
import LoginCloseMainBtn from '../../components/Login/LoginCloseMainBtn';
import './LoginForm.scss';

const LoginForm = ({
  formData,
  onChangeLoginMode,
  onCloseModal,
  loginMode,
  userInfo,
  setUserInfo,
  onClearUserInfo,
  inputValidity,
  onSetInputValidity,
}) => {
  const isInputAllValid =
    inputValidity.email &&
    inputValidity.firstName &&
    inputValidity.lastName &&
    inputValidity.password &&
    inputValidity.rePassword &&
    inputValidity.emailContainAt &&
    inputValidity.samePassword;

  // 1.wrongEmail 2.wrongPassword 3.failedPost 4.alreadyExist
  const [loginError, setLoginError] = useState('');

  const goToSignIn = () => {
    onChangeLoginMode('signIn');
  };
  const goToSignUp = () => {
    onChangeLoginMode('signUp');
  };

  const goToResetPw = () => {
    onChangeLoginMode('resetPw');
  };

  const sumbmitHandler = event => {
    event.preventDefault();

    if (
      inputValidity.emailContainAt &&
      inputValidity.email &&
      loginMode === 'main'
    ) {
      fetch('http://10.58.7.33:8000/users/check', {
        method: 'POST',
        body: JSON.stringify({
          email: userInfo.email,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === true) {
            setLoginError('');
            goToSignIn();
          }

          if (res.message === 'VALIDATION_ERROR') {
            setLoginError('wrongEmail');
          }
          if (!res.message) {
            goToSignUp();
            onClearUserInfo();
            setLoginError('');
          }
        });
    }

    if (
      inputValidity.emailContainAt &&
      inputValidity.email &&
      inputValidity.password &&
      loginMode === 'signIn'
    ) {
      fetch('http://10.58.7.33:8000/users/login', {
        method: 'POST',
        body: JSON.stringify({
          email: userInfo.email,
          password: userInfo.password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'SUCCESS') {
            localStorage.setItem('wtw-token', res.token);
            setLoginError('');
            onClearUserInfo();
            onCloseModal();
          } else {
            setLoginError('wrongPassword');
          }
        });
    }

    if (isInputAllValid && loginMode === 'signUp') {
      fetch('http://10.58.7.33:8000/users/signup', {
        method: 'POST',
        body: JSON.stringify({
          email: userInfo.email,
          password: userInfo.password,
          last_name: userInfo.lastName,
          first_name: userInfo.firstName,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'SUCCESS') {
            localStorage.setItem('wtw-token', res.token);
            setLoginError('');
            onClearUserInfo();
            onCloseModal();
          }
          if (res.message === 'ALREADY_EXIST_EMAIL') {
            setLoginError('alreadyExist');
          } else if (
            res.message === 'VALIDATION_ERROR' ||
            res.message === 'KEY_ERROR'
          ) {
            setLoginError('failedPost');
          }
        });
    }
  };

  return (
    <form className="loginForm" onSubmit={sumbmitHandler}>
      <section className="loginTopBtnArea">
        <LoginCloseMiniBtn
          onCloseModal={onCloseModal}
          onClearUserInfo={onClearUserInfo}
        />
        {loginMode === 'main' || (
          <LoginBackMiniBtn
            onChangeLoginMode={onChangeLoginMode}
            onClearUserInfo={onClearUserInfo}
          />
        )}
      </section>

      <section className="loginMessageArea">
        <LoginMessage
          loginMode={loginMode}
          inputValidity={inputValidity}
          loginError={loginError}
        />
      </section>

      <section className="loginInputArea">
        {formData.map(data => (
          <LoginInput
            key={data.infoType}
            loginMode={loginMode}
            infoType={data.infoType}
            inputType={data.inputType}
            inputText={data.string}
            onSetUserInfo={setUserInfo}
            userInfo={userInfo}
            onSetInputValidity={onSetInputValidity}
            inputValidity={inputValidity}
          />
        ))}
      </section>

      <section className="loginMainBtnArea">
        {loginMode === 'receivedPw' || (
          <LoginSubmitButton
            onChangeLoginMode={onChangeLoginMode}
            loginMode={loginMode}
            inputValidity={inputValidity}
          />
        )}
        {loginMode === 'receivedPw' && (
          <LoginCloseMainBtn onCloseModal={onCloseModal} />
        )}
      </section>

      <section className="loginBottomBtnArea">
        {loginMode === 'signIn' && (
          <button type="button" onClick={goToResetPw}>
            패스워드 재설정하기
          </button>
        )}
        {loginMode === 'signUp' && (
          <button type="button" onClick={goToSignIn}>
            <p>위솝 계정을 가지고 계십니까?</p>
          </button>
        )}
      </section>
    </form>
  );
};

export default LoginForm;
