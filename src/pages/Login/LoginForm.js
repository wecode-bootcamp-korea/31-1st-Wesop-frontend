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
}) => {
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

  const isInputAllValid =
    inputValidity.email &&
    inputValidity.firstName &&
    inputValidity.lastName &&
    inputValidity.password &&
    inputValidity.rePassword &&
    inputValidity.emailContainAt &&
    inputValidity.samePassword;

  const clearUserState = () => {
    setUserInfo({
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      rePassword: '',
    });
  };

  const maintainUserState = () => {
    setUserInfo(prevInfo => {
      return { ...prevInfo };
    });
  };

  console.log(userInfo);

  const goToSignIn = () => {
    maintainUserState();
    onChangeLoginMode('signIn');
  };

  const goToSignUp = () => {
    maintainUserState();
    onChangeLoginMode('signUp');
  };

  const goToResetPw = () => {
    maintainUserState();
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
          console.log(res);

          if (res.message === true) {
            goToSignIn();
          }

          if (res.message === 'VALIDATION_ERROR') {
            console.log('유효한 양식으로 입력해주세요');
          }
          if (!res.message) {
            goToSignUp();
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
            clearUserState();
            onCloseModal();
          } else {
            console.log('비밀번호가 틀립니다에 맞춰서 작동할 코드');
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
            clearUserState();
            onCloseModal();
          } else if (
            res.message === 'VALIDATION_ERROR' ||
            res.message === 'KEY_ERROR'
          ) {
            console.log('회원가입 전송 실패');
          }
        });
    }
  };

  return (
    <form className="loginForm" onSubmit={sumbmitHandler}>
      <section className="loginTopBtnArea">
        <LoginCloseMiniBtn onCloseModal={onCloseModal} />
        {loginMode === 'main' || (
          <LoginBackMiniBtn onChangeLoginMode={onChangeLoginMode} />
        )}
      </section>

      <section className="loginMessageArea">
        <LoginMessage loginMode={loginMode} inputValidity={inputValidity} />
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
            onSetInputValidity={setInputValidity}
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
