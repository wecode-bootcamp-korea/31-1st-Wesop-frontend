import React, { useState } from 'react';
import LoginMessage from '../../components/Login/LoginMessage';
import LoginSubmitButton from '../../components/Login/LoginSubmitBtn';
import LoginInput from '../../components/Login/LoginInput';
import LoginCloseMiniBtn from '../../components/Login/LoginCloseMiniBtn';
import LoginBackMiniBtn from '../../components/Login/LoginBackMiniBtn';
import LoginCloseMainBtn from '../../components/Login/LoginCloseMainBtn';
import API from '../../config/config';
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
  onSetLoginedUserInfo,
}) => {
  const {
    email,
    firstName,
    lastName,
    password,
    rePassword,
    emailContainAt,
    samePassword,
  } = inputValidity;

  const isInputAllValid =
    email &&
    firstName &&
    lastName &&
    password &&
    rePassword &&
    emailContainAt &&
    samePassword;

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

  const resetLoginErrorMsgHandler = () => {
    setLoginError('');
  };

  const mainEmailInfoSubmit = () => {
    fetch(API.loginMainAddress, {
      method: 'POST',
      body: JSON.stringify({
        email: userInfo.email,
      }),
    })
      .then(res => res.json())
      .then(res => {
        const { message } = res;
        const resCondition = {
          true: function () {
            setLoginError('');
            goToSignIn();
          },
          VALIDATION_ERROR: function () {
            setLoginError('wrongEmail');
          },
          false: function () {
            goToSignUp();
            onClearUserInfo();
            setLoginError('');
          },
        };

        resCondition[message]();
      });
  };

  const signInInfoSubmit = () => {
    fetch(API.loginSignInAddress, {
      method: 'POST',
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        const { token, email, user_id, first_Name, last_Name, message } = res;
        const resCondition = {
          SUCCESS: function () {
            localStorage.setItem('token', token);
            onSetLoginedUserInfo({
              email: email,
              userId: user_id,
              firstName: first_Name,
              lastName: last_Name,
            });
            setLoginError('');
            onClearUserInfo();
            onCloseModal();
          },
          VALIDATION_ERROR: function () {
            setLoginError('wrongPassword');
          },
        };
        resCondition[message]();
      });
  };

  const signUpInfoSubmit = () => {
    if (isInputAllValid && loginMode === 'signUp') {
      fetch(API.loginSignUpAddress, {
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
          const { token, email, user_id, first_Name, last_Name, message } = res;
          const resCondition = {
            SUCCESS: function () {
              localStorage.setItem('token', token);
              onSetLoginedUserInfo({
                email: email,
                userId: user_id,
                firstName: first_Name,
                lastName: last_Name,
              });
              setLoginError('');
              onClearUserInfo();
              onCloseModal();
            },
            ALREADY_EXIST_EMAIL: function () {
              setLoginError('alreadyExist');
            },
            VALIDATION_ERROR: function () {
              setLoginError('wrongEmail');
            },
            KEY_ERROR: function () {
              setLoginError('failedPost');
            },
          };

          resCondition[message]();
        });
    }
  };

  const sumbmitHandler = event => {
    const { email, emailContainAt, password } = inputValidity;

    event.preventDefault();
    if (emailContainAt && email && loginMode === 'main') {
      mainEmailInfoSubmit();
    }

    if (emailContainAt && email && password && loginMode === 'signIn') {
      signInInfoSubmit();
    }

    if (isInputAllValid && loginMode === 'signUp') {
      signUpInfoSubmit();
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
        {formData.map(({ infoType, inputType, string }) => (
          <LoginInput
            key={infoType}
            loginMode={loginMode}
            infoType={infoType}
            inputType={inputType}
            inputText={string}
            onResetLoginErrorMsg={resetLoginErrorMsgHandler}
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
            ???????????? ???????????????
          </button>
        )}
        {loginMode === 'signUp' && (
          <button type="button" onClick={goToSignIn}>
            <p>?????? ????????? ????????? ?????????????</p>
          </button>
        )}
      </section>
    </form>
  );
};

export default LoginForm;
