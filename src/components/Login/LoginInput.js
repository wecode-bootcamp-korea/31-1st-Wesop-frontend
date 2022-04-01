import React from 'react';
import './LoginInput.scss';

const LoginInput = ({
  loginMode,
  infoType,
  inputText,
  inputType,
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

    userInfo.email.includes('@') &&
    userInfo.email.trim().length > 7 &&
    userInfo.email.includes('.')
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

  return (
    <div className="loginInput">
      <input
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
    </div>
  );
};

export default LoginInput;
