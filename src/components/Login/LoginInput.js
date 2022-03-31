import React from 'react';
import './LoginInput.scss';

const LoginInput = ({ inputText, inputType }) => {
  return (
    <div className="loginInput">
      <input type={inputType} placeholder={inputText} />
      {/* <input type="text" placeholder={text} /> */}
      {/* <p>에러시 보이는 메세지 넣으면 될 듯</p> */}
    </div>
  );
};

export default LoginInput;
