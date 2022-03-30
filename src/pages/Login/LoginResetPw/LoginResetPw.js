import React, { useState } from 'react';
import './LoginResetPw.scss';

const LoginResetPw = ({ onChangeMode }) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [isContainAt, setIsContainAt] = useState(true);

  const changeEmailHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const checkAt = () => {
    enteredEmail.length === 0 || enteredEmail.includes('@')
      ? setIsContainAt(true)
      : setIsContainAt(false);
  };

  const submitEmailHandler = event => {
    event.preventDefault();
    if (enteredEmail && isContainAt) {
      console.log('reset pw submit activvvve');
      onChangeMode(5);
    }
  };

  const inputEmail = (
    <input
      type="email"
      onChange={changeEmailHandler}
      onBlur={checkAt}
      placeholder="이메일 주소"
    />
  );

  const emailErrMSg = (
    <p>
      "이메일 주소 형식에 맞지 않습니다. 다시 확인해주세요. (예:
      name@example.com)"
    </p>
  );

  return (
    <form className="loginResetPw" onSubmit={submitEmailHandler}>
      {inputEmail}
      {isContainAt ? '' : emailErrMSg}
      <button type="submit">계속</button>
    </form>
  );
};

export default LoginResetPw;
