import React, { useState } from 'react';
import './LoginInput.scss';

const LoginInput = ({
  loginMode,
  infoType,
  inputText,
  inputType,
  onResetLoginErrorMsg,
  userInfo,
  onSetUserInfo,
  onSetInputValidity,
}) => {
  const [isContainSymbolAt, setIsContainSymbolAt] = useState(true);
  const [isSamePassword, setIsSamePasswrod] = useState(true);

  const changeUserInfo = event => {
    const { name, value } = event.target;
    onSetUserInfo(prevUserInfo => {
      return { ...prevUserInfo, [name]: value };
    });
  };

  const changeValidityHandler = event => {
    const { name, value } = event.target;

    value.trim().length > 0
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

  const changeIsContainSymbolAtHandler = event => {
    const { value } = event.target;

    if (
      userInfo.email &&
      infoType === 'email' &&
      !value.includes('@') &&
      value
    ) {
      setIsContainSymbolAt(false);
    } else {
      setIsContainSymbolAt(true);
    }
  };

  const changeIsSamePasswordHandler = event => {
    const { value } = event.target;

    if (
      userInfo.rePassword &&
      infoType === 'rePassword' &&
      !(userInfo.password === value) &&
      value
    ) {
      setIsSamePasswrod(false);
    } else {
      setIsSamePasswrod(true);
    }
  };

  const userInfoAndInputValidityHandler = event => {
    changeUserInfo(event);
    onResetLoginErrorMsg();
    changeValidityHandler(event);
    changeIsContainSymbolAtHandler(event);
    changeIsSamePasswordHandler(event);
  };

  return (
    <div className="loginInput">
      <input
        className="insert"
        readOnly={
          loginMode === 'signIn' && inputType === 'email' ? true : false
        }
        type={inputType}
        placeholder={inputText}
        onChange={userInfoAndInputValidityHandler}
        onBlur={userInfoAndInputValidityHandler}
        name={infoType}
        value={userInfo[infoType]}
      />
      <p className="inputErrorMsg">
        {isContainSymbolAt
          ? ''
          : '이메일 주소 형식에 맞지 않습니다. 다시 확인해주세요.'}{' '}
      </p>
      <p className="inputErrorMsg">
        {isSamePassword ? '' : '이전에 사용했던 패스워드를 입력하세요.'}
      </p>
    </div>
  );
};

export default LoginInput;
