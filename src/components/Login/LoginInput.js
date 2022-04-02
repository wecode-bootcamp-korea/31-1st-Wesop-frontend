import React, { useState, useEffect } from 'react';
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
  const [isContainSymbolAt, setIsContainSymbolAt] = useState(true);
  const [isSamePassword, setIsSamePasswrod] = useState(true);

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

  const changeIsContainSymbolAtHandler = event => {
    if (
      userInfo.email &&
      infoType === 'email' &&
      !event.target.value.includes('@') &&
      event.target.value
    ) {
      setIsContainSymbolAt(false);
    } else {
      setIsContainSymbolAt(true);
    }
  };

  const changeIsSamePasswordHandler = event => {
    if (
      userInfo.rePassword &&
      infoType === 'rePassword' &&
      !(userInfo.password === event.target.value) &&
      event.target.value
    ) {
      setIsSamePasswrod(false);
    } else {
      setIsSamePasswrod(true);
    }
  };
  const userInfoAndInputValidityHandler = event => {
    changeUserInfo(event);
    changeValidityHandler(event);
    changeIsContainSymbolAtHandler(event);
    changeIsSamePasswordHandler(event);
  };

  const errorMsg1 = 'abc';
  const errorMsg2 = 'eee';

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
        onBlur={changeValidityHandler}
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
