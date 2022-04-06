import React from 'react';

const Login = ({ onCloseLoginModal, onSetLoginedUserInfo }) => {
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
    onCloseLoginModal();
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
        onSetLoginedUserInfo={onSetLoginedUserInfo}
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
