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
    const { email, password, rePassword } = userInfo;

    value.trim().length > 0
      ? onSetInputValidity(prevInfo => {
          return { ...prevInfo, [name]: true };
        })
      : onSetInputValidity(prevInfo => {
          return { ...prevInfo, [name]: false };
        });

    email.includes('@')
      ? onSetInputValidity(prevInfo => {
          return { ...prevInfo, emailContainAt: true };
        })
      : onSetInputValidity(prevInfo => {
          return { ...prevInfo, emailContainAt: false };
        });

    password === rePassword
      ? onSetInputValidity(prevInfo => {
          return { ...prevInfo, samePassword: true };
        })
      : onSetInputValidity(prevInfo => {
          return { ...prevInfo, samePassword: false };
        });
  };

  const changeIsContainSymbolAtHandler = event => {
    const { value } = event.target;
    const { email } = userInfo;

    if (email && infoType === 'email' && !value.includes('@') && value) {
      setIsContainSymbolAt(false);
    } else {
      setIsContainSymbolAt(true);
    }
  };

  const changeIsSamePasswordHandler = event => {
    const { value } = event.target;
    const { password, rePassword } = userInfo;
    if (
      rePassword &&
      infoType === 'rePassword' &&
      !(password === value) &&
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
          : '????????? ?????? ????????? ?????? ????????????. ?????? ??????????????????.'}{' '}
      </p>
      <p className="inputErrorMsg">
        {isSamePassword ? '' : '????????? ???????????? ??????????????? ???????????????.'}
      </p>
    </div>
  );
};

export default LoginInput;
