import React from 'react';
import './LoginInput.scss';

const LoginInput = ({
  loginMode,
  infoType,
  inputText,
  inputType,
  inputValidity,
  userInfo,
  onSetUserInfo,
  onSetInputValidity,
}) => {
  const changeUserInfo = event => {
    const { name, value } = event.target;
    onSetUserInfo(prevUserInfo => {
      return { ...prevUserInfo, [name]: value };
    });
  };

  const changeValidityHandler = event => {
    const { name } = event.target;

    event.target.value.trim().length > 0
      ? onSetInputValidity(prevInfo => {
          return { ...prevInfo, [name]: true };
        })
      : onSetInputValidity(prevInfo => {
          return { ...prevInfo, [name]: false };
        });

    userInfo.email.includes('@')
      ? onSetInputValidity(prevInfo => {
          return { ...prevInfo, emailContainAt: true };
        })
      : onSetInputValidity(prevInfo => {
          return { ...prevInfo, emailContainAt: false };
        });

    userInfo.password === userInfo.rePassword
      ? onSetInputValidity(prevInfo => {
          return { ...prevInfo, samePassword: true };
        })
      : onSetInputValidity(prevInfo => {
          return { ...prevInfo, samePassword: false };
        });
  };

  const containAtErrorMsg = (
    <p className="inputErrorMsg">
      이메일 주소 형식에 맞지 않습니다. 다시 확인해주세요.
    </p>
  );

  const samePasswordErrorMsg = (
    <p className="inputErrorMsg">이전에 사용했던 패스워드를 입력하세요.</p>
  );

  const isContainAtError =
    userInfo.email && infoType === 'email' && !inputValidity.emailContainAt;

  const isSamePasswordErr =
    userInfo.rePassword &&
    infoType === 'rePassword' &&
    !inputValidity.samePassword;

  return (
    <div className="loginInput">
      <input
        className="insert"
        readOnly={
          loginMode === 'signIn' && inputType === 'email' ? true : false
        }
        type={inputType}
        placeholder={inputText}
        onChange={event => {
          changeUserInfo(event);
          changeValidityHandler(event);
        }}
        onBlur={changeValidityHandler}
        name={infoType}
        value={userInfo[infoType]}
      />
      {isContainAtError ? containAtErrorMsg : ''}
      {isSamePasswordErr ? samePasswordErrorMsg : ''}
    </div>
  );
};

export default LoginInput;
