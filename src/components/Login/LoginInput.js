import React, { useState } from 'react';
import './LoginInput.scss';

const LoginInput = ({
  infoType,
  inputText,
  inputType,
  // onInsertUserInfo,
  onChangeValidity,
  inputValidity,
  onSetUserInfo,
}) => {
  const [inputData, setInputData] = useState('');
  const [error, setError] = useState(true);

  const getUserInfo = e => {
    const { name, value } = e.target;
    onSetUserInfo({ [name]: value });
  };

  return (
    <div className="loginInput">
      <input
        type={inputType}
        placeholder={inputText}
        onChange={getUserInfo}
        onBlur={onChangeValidity}
        name={infoType}
      />
      {/* TODO: <p>에러시 보이는 메세지 넣으면 될 듯</p> */}
    </div>
  );
};

export default LoginInput;
