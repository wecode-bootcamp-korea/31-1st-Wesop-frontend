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
    rePasswrod: '',
  });

  const [inputValidity, setInputValidity] = useState({
    email: false,
    firstName: false,
    lastName: false,
    password: false,
    rePasswrod: false,
    emailContainAt: false,
    samePassword: false,
  });

  const isInputAllValid =
    inputValidity.email &&
    inputValidity.firstName &&
    inputValidity.lastName &&
    inputValidity.password &&
    inputValidity.rePasswrod &&
    inputValidity.emailContainAt &&
    inputValidity.samePassword;

  // const insertUserInfoHandler = key => {
  //   console.log(key);
  //   // setUserInfo({ [key]: value });
  // };

  // handleInput = (e) => {
  // const { name, value } = e.target;
  // setInputVal({ [name]: value })
  // }

  // TODO: 수정
  // const validityChangeHandler = event => {
  //   setInputValidity()
  // };

  // const sumbmitHandler = () => {
  //   // TODO: 유효한지에 대한 1차검사
  //   // 유효했으면 userInfo에 대한 백앤드 통신코드 구성
  // };

  const goToSignIn = () => {
    onChangeLoginMode('signIn');
  };

  const goToResetPw = () => {
    onChangeLoginMode('resetPw');
  };

  return (
    <form className="loginForm">
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
            // onInsertUserInfo={insertUserInfoHandler}
            onSetUserInfo={setUserInfo}
            // onChangeValidity={validityChangeHandler}
            inputValidity={inputValidity}
          />
        ))}
      </section>

      <section className="loginMainBtnArea">
        {loginMode === 'receivedPw' || (
          <LoginSubmitButton
            onChangeLoginMode={onChangeLoginMode}
            loginMode={loginMode}
          />
        )}
        {loginMode === 'receivedPw' && (
          <LoginCloseMainBtn onCloseModal={onCloseModal} />
        )}
      </section>

      <section className="loginBottomBtnArea">
        {loginMode === 'signIn' && (
          <button onClick={goToResetPw}>패스워드 재설정하기</button>
        )}
        {loginMode === 'signUp' && (
          <button onClick={goToSignIn}>
            <p>이솝 계정을 가지고 계십니까?</p>
          </button>
        )}
      </section>
    </form>
  );
};

export default LoginForm;
