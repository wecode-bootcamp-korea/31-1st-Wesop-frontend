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

  const sumbmitHandler = event => {
    event.preventDefault();

    if (
      inputValidity.emailContainAt &&
      inputValidity.email &&
      loginMode === 'main'
    ) {
      // 백앤드 통신코드 작성예정입니다. 콘솔로그 잠깐만 봐주세요 멘토님 ㅠㅠ
      console.log(`email submit : ${userInfo.email}`);
    }

    if (
      inputValidity.emailContainAt &&
      inputValidity.email &&
      inputValidity.password &&
      loginMode === 'signIn'
    ) {
      // 백앤드 통신코드 작성예정입니다. 콘솔로그 잠깐만 봐주세요 멘토님 ㅠㅠ
      console.log(userInfo.email, userInfo.password);
    }

    if (isInputAllValid && loginMode === 'signUp') {
      // 백앤드 통신코드 작성예정입니다. 콘솔로그 잠깐만 봐주세요 멘토님 ㅠㅠ
      console.log(userInfo);
    }
  };

  const goToSignIn = () => {
    onChangeLoginMode('signIn');
  };

  const goToResetPw = () => {
    onChangeLoginMode('resetPw');
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
